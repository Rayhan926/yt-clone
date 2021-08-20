import FilterListIcon from "@material-ui/icons/FilterList";
import { Avatar } from "@material-ui/core";
import numeral from "numeral";

function VideoComments({ meta }) {
  const statis = meta?.statistics;

  return (
    <div className="pt-3.5 mt-2 border-t border-gray-200">
      <div className="flex items-center justify-between">
        <div>{statis?.commentCount} Comments</div>
        <div className="flex items-center text-base text-gray-500 cursor-pointer py-2 px-4 duration-150 hover:bg-gray-200">
          <FilterListIcon />
          <span className="ml-2">Short By</span>
        </div>
      </div>

      <div className="mt-4">
        <form className="w-full">
          <div className="flex items-center">
            <div>
              <Avatar src="/img/me.jpg" />
            </div>
            <div className="flex-grow ml-4">
              <input
                type="text"
                placeholder="Add your public comment.."
                className="border-b-2 w-full outline-none border-gray-200 focus:border-gray-600 text-gray-900 text-base py-[6px]"
              />
            </div>
            <div>
              <button
                type="submit"
                className="border-none outline-none px-4 h-full cursor-pointer duration-150 hover:bg-gray-900 hover:text-white py-[7px] bg-gray-200 text-black"
              >
                Comment
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-8">
        {[...Array(20)].map((e, i) => (
          <div className="flex mb-5 last:mb-0" key={i}>
            <div>
              <Avatar src="/img/me.jpg" />
            </div>
            <div className="ml-6 flex-grow">
              <div className="flex items-center">
                <h4 className="text-sm text-gray-900 mr-2 font-medium">
                  Rayhan Ahmed
                </h4>
                <span className="text-gray-500 text-xs">19 hours ago</span>
              </div>
              <div className="mt-1.5">
                <p className="text-gray-900 text-base">
                  মাননীয় প্রধানমন্ত্রী শেখ হাসিনা এই সাহসী ও সময়োপযোগী উদ্যোগ এর
                  জন্য ধন্যবাদ পাওয়ার যোগ্য
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoComments;
