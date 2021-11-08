import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { headerTags } from "../../dummy";
import {
  emptyVideos,
  getideosByCategory,
  getPopularVideos,
} from "../../redux/actions/videos.action";
import HeaderTagSkelenton from "../Skeleton/HeaderTagSkelenton";
import request from "./../../api";

function HeaderTags({ className }) {
  const dispatch = useDispatch();
  const [videoCategories, setVideoCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("");
  const handleClick = (tag) => {
    setActive(tag);
    dispatch(emptyVideos())
    tag === "All"
      ? dispatch(getPopularVideos())
      : dispatch(getideosByCategory(tag));
  };
  useEffect(() => {
    setLoading(true);
    const getVideoCategories = async () => {
      let {
        data: { items },
      } = await request("videoCategories", {
        params: {
          part: "snippet",
          regionCode: "IN",
        },
      });

      // const items = headerTags // remove this line in production

      let allCategoryTag = {
        snippet: {
          title: "All",
        },
      };

      const withAll = [allCategoryTag, ...items];
      setVideoCategories(withAll);
      setLoading(false);
    };
    getVideoCategories();
  }, []);

  return (
    <div
      className={`sm:px-5 flex space-x-3 items-center py-3 border-b select-none border-gray-200 w-full max-w-full overflow-x-auto thin_scrollbar ${className}`}
    >
      {videoCategories && !loading
        ? videoCategories.map((category, i) => (
          <div
            key={i}
            onClick={() =>
              handleClick(category?.snippet?.title.replace("/", " "))
            }
            className={`rounded-full text-sm whitespace-nowrap text-gray-900 py-[6px] hover:bg-gray-200 px-3.5 cursor-pointer ${active === category?.snippet?.title ||
              (!active && category?.snippet?.title === "All")
              ? "bg-black text-white hover:bg-gray-900"
              : "border border-gray-300 bg-gray-100"
              }`}
          >
            {category?.snippet?.title.replace("/", " ")}
          </div>
        ))
        : [...Array(15)].map((e, i) => <HeaderTagSkelenton key={i} />)}
    </div>
  );
}

export default HeaderTags;
