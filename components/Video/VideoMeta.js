import Avatar from "../Avatar";
import useChannelMeta from "../../hooks/useChannelMeta";
import { useState } from "react";
import numeral from "numeral";
import moment from "moment";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { MdFiberManualRecord } from "react-icons/md";
import Linkify from 'react-linkify';
import ShowMoreText from "react-show-more-text";

function VideoMeta({ meta }) {
  const snippet = meta?.snippet;
  const { dislikeCount, likeCount, viewCount } = meta?.statistics;
  const { channelMeta } = useChannelMeta(
    snippet?.channelId,
    "snippet,statistics,contentDetails"
  );

  console.log(snippet);

  const [toogleShowMore, setToogleShowMore] = useState(false);

  return (
    <div className="mt-4">
      <h1 className="text-lg text-black">{snippet?.title}</h1>
      <div className="flex justify-between border-b mt-3 border-gray-200 items-start">
        <span className="text-gray-600 text-sm flex items-center space-x-1">
          <span className="uppercase">{numeral(viewCount).format("0.a")}</span>
          <span>views</span>
          <span><MdFiberManualRecord style={{ width: "5px", height: "5px" }} /></span>
          <span>{moment(snippet?.publishedAt).fromNow()}</span>
        </span>
        <div className="flex items-center">
          <div className="flex cursor-pointer justify-center items-center text-gray-800 pb-3.5 border-b-2 px-3 border-gray-500 font-normal text-sm">
            <FiThumbsUp />
            <span className="ml-2 uppercase">
              {numeral(likeCount).format("0.a")}
            </span>
          </div>
          <div className="flex cursor-pointer justify-center items-center text-gray-800 pb-3.5 border-b-2 px-3 border-gray-500 font-normal text-sm">
            <FiThumbsDown />
            <span className="ml-2 uppercase">
              Dislike
            </span>
          </div>
        </div>
      </div>
      <div className="py-3.5 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center">
          <div className="pr-3 cursor-pointer">
            <Avatar
              src={channelMeta?.snippet?.thumbnails?.default?.url}
              size={'50px'}
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
      {/* Description start */}
      {snippet.description && <div className="px-6 py-3">
        <div
          className={`overflow-hidden text-sm _link border-b border-gray-200 pb-5 font-sans"
            }`}
          style={{ lineHeight: '1.5' }}
        >
          <ShowMoreText
            lines={3}
            more="Show more"
            less="Show less"
            anchorClass="bg-white pt-[14px] inline-block relative z-[2] text-sm uppercase !text-gray-600 font-medium cursor-pointer"
            // onClick={this.executeOnClick}
            expanded={false}
            // width={280}
            truncatedEndingComponent={"... "}
          >
            <Linkify>
              <pre className="font-sans text-sm _video_description whitespace-pre-line" style={{ lineHeight: '1.5' }} >
                {snippet?.description}
              </pre>
            </Linkify>
          </ShowMoreText>
        </div>
      </div>}
      {/* Description start */}
    </div>
  );
}

export default VideoMeta;
