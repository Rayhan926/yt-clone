import Image from "next/image";
import Avatar from "../Avatar";
import { useEffect, useState } from "react";
import request from "./../../api";
import moment from "moment";
import numeral from "numeral";
import Link from "next/link";
import { MdFiberManualRecord } from 'react-icons/md';
function Video({ video, layoutHorizontal }) {
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
  console.log(channelId);
  const videoId = id.videoId || id
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
          id: videoId,
        },
      });
      console.log(items[0]);
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_details();
  }, [videoId]);

  // Get Channel Icon
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
    <div className={`pb-4 ${layoutHorizontal ? 'grid grid-cols-[45%,auto]' : ''}`}>
      <Link href={`/watch/${videoId}`}>
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
      <div className={`flex px-4 sm:px-0 ${!layoutHorizontal ? 'pt-3' : ''}`}>
        {
          !layoutHorizontal && (
            <div className="cursor-pointer">
              <Avatar src={channelIcon?.url} className="user_avatar" />
            </div>
          )
        }
        <div className="pl-3">
          <Link href={`/watch/${videoId}`}>
            <a className="text-[#030303] text-sm font-medium line_clamp cursor-pointer">
              {title}
            </a>
          </Link>

          <div className="flex flex-col mt-1 text-gray-600 text-sm">
            <p className="duration-200 hover:text-gray-800 cursor-pointer">
              {channelTitle}
            </p>
            <p className="cursor-pointer">
              <Link href={`/watch/${videoId}`}>
                <a className="flex items-center space-x-1" >
                  <span className="uppercase">
                    {views && numeral(views).format("0.a")}
                  </span>
                  <span>views</span>
                  <span className="!mr-1 block"><MdFiberManualRecord
                    style={{ width: "5px", height: "5px" }}
                  /></span>
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
