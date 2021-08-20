import Image from "next/image";
import { Avatar } from "@material-ui/core";
import { useEffect, useState } from "react";
import request from "./../../api";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import moment from "moment";
import numeral from "numeral";
import Link from "next/link";
function Video({ video }) {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;
  const { url, width, height } = medium;
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  // Get Video Details
  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId || id,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_details();
  }, [id]);

  // Get Channel ICOn
  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  return (
    <div className="pb-4">
      <Link href={`/watch/${id}`}>
        <a>
          <div className="relative cursor-pointer">
            <div className="loading_img">
              <Image
                layout="responsive"
                src={url}
                width={width}
                height={height}
              />
            </div>
            <div className="absolute bottom-1 right-1 pointer-events-none bg-black text-xs bg-opacity-80 px-[4px] rounded-sm py-[1px] text-white">
              {duration && _duration}
            </div>
          </div>
        </a>
      </Link>
      <div className="pt-3 flex px-4 sm:px-0">
        <div className="cursor-pointer">
          <Avatar src={channelIcon?.url} className="user_avatar" />
        </div>
        <div className="pl-3">
          <Link href={`/watch/${id}`}>
            <a className="text-[#030303] text-sm font-medium line_clamp cursor-pointer">
              {title}
            </a>
          </Link>

          <div className="flex flex-col mt-1 text-gray-600 text-sm">
            <p className="duration-200 hover:text-gray-800 cursor-pointer">
              {channelTitle}
            </p>
            <p className="cursor-pointer">
              <Link href={`/watch/${id}`}>
                <a>
                  <span className="uppercase">
                    {views && numeral(views).format("0.a")}
                  </span>{" "}
                  views{" "}
                  <FiberManualRecordIcon
                    style={{ width: "5px", height: "5px" }}
                  />{" "}
                  {moment(publishedAt).fromNow()}
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
