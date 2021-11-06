import { MdFiberManualRecord } from "react-icons/md";
function VideoHorizontal({ video }) {
  return (
    <div className="flex gap-3 mb-3 last:mb-0">
      <div className="relative cursor-pointer max-w-[45%] min-w-[45%]">
        <div className="loading_img">
          <img src={video?.snippet.thumbnails.medium.url} alt="Thumbnail" />
        </div>
        <div className="absolute bottom-1 right-1 pointer-events-none bg-black text-xs bg-opacity-80 px-[4px] rounded-sm py-[1px] text-white">
          12:30
        </div>
      </div>
      <div>
        <h3 className="text-[#030303] text-sm font-medium line_clamp cursor-pointer">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi amet
          reiciendis quo.
        </h3>
        <div className="flex flex-col mt-1 text-gray-600 text-sm">
          <p className="duration-200 hover:text-gray-800 cursor-pointer">
            {snippet?.channelTitle}
          </p>
          <p className="cursor-pointer flex items-center space-x-1 text-xs">
            <span className="uppercase">120k</span>
            <span>
              {/* {views && numeral(views).format("0.a")} */}
            </span>
            <MdFiberManualRecord style={{ width: "5px", height: "5px" }} className="!mr-1" /> 2
            <span>days ago</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoHorizontal;
