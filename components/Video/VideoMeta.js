import Avatar from "../Avatar";
import useChannelMeta from "../../hooks/useChannelMeta";
import { useState } from "react";
import numeral from "numeral";
import moment from "moment";
import useSubscriptionStatus from "./../../hooks/useSubscriptionStatus";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { MdFiberManualRecord } from "react-icons/md";

function VideoMeta({ meta }) {
  const snippet = meta?.snippet;
  const { dislikeCount, likeCount, viewCount } = meta?.statistics;
  const { loadingChannelMeta, errorChannelMeta, channelMeta } = useChannelMeta(
    snippet?.channelId,
    "snippet,statistics,contentDetails"
  );

  const {
    loadingSubscriptionStatus,
    errorSubscriptionStatus,
    subscriptionStatus,
  } = useSubscriptionStatus(snippet?.channelId);
  console.log(subscriptionStatus);
  const [toogleShowMore, setToogleShowMore] = useState(false);
  return (
    <div className="mt-4">
      <h1 className="text-lg text-black">{snippet?.title}</h1>
      <div className="flex justify-between border-b mt-3 border-gray-200 items-center">
        <span className="text-gray-600 text-sm">
          <span className="uppercase">{numeral(viewCount).format("0.a")}</span>{" "}
          views{" "}
          <MdFiberManualRecord style={{ width: "5px", height: "5px" }} />{" "}
          {moment(snippet?.publishedAt).fromNow()}
        </span>
        <div className="flex items-center">
          <div className="flex justify-center items-center text-gray-500 pb-3.5 border-b-2 px-3 border-gray-500 text-base font-semibold">
            <FiThumbsUp />
            <span className="ml-2 uppercase">
              {numeral(likeCount).format("0.a")}
            </span>
          </div>
          <div className="flex justify-center items-center text-gray-500 pb-3.5 border-b-2 px-3 border-gray-500 text-base font-semibold">
            <FiThumbsDown />
            <span className="ml-2 uppercase">
              {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="py-3.5 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-start">
          <div className="pr-3 cursor-pointer">
            <Avatar
              src={channelMeta?.snippet?.thumbnails?.default?.url}
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <div>
            <h3 className="text-sm font-semibold cursor-pointer to-black">
              {snippet?.channelTitle}
            </h3>
            <p className="text-xs text-gray-500">
              <span className="uppercase">
                {numeral(channelMeta?.statistics?.subscriberCount).format(
                  "0.a"
                )}
              </span>{" "}
              subscribers
            </p>
          </div>
        </div>
        <div>
          <button className="subs_btn">Subscribe</button>
        </div>
      </div>
      <div className="px-6 py-3">
        <div
          className={`overflow-hidden ${toogleShowMore ? "h-auto" : "max-h-[100px]"
            }`}
        >
          {snippet?.description}
        </div>
        <div
          onClick={() => setToogleShowMore(!toogleShowMore)}
          className="bg-white mt-4 relative z-[2] text-sm uppercase text-gray-600 font-medium cursor-pointer"
        >
          <p>Show {toogleShowMore ? "Less" : "More"}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoMeta;
