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

import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Mousewheel, Pagination } from "swiper";
import { useRef } from "react";

SwiperCore.use([Navigation, Mousewheel, Pagination]);

function HeaderTags({ className }) {
  const dispatch = useDispatch();
  const [videoCategories, setVideoCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("");

  const nextElm = useRef(null)
  const prevElm = useRef(null)


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
      className={`sm:px-5 py-3 relative border-b select-none border-gray-200 w-full max-w-full ${className}`}
    >
      {videoCategories && !loading
        ? (
          <>
            <Swiper
              mousewheel={true}
              direction={'horizontal'}
              slidesPerView='auto'
              spaceBetween={15}
              pagination={{
                "clickable": true
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevElm.current;
                swiper.params.navigation.nextEl = nextElm.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              <button className="swiper_navigation_button prev_button left-0 justify-start" ref={prevElm}><BsChevronLeft className="w-5 h-5 text-gray-700" /></button>
              <button className="swiper_navigation_button next_button right-0 justify-end" ref={nextElm}><BsChevronRight className="w-5 h-5 text-gray-700" /></button>
              {
                videoCategories.map((category, i) => (
                  <SwiperSlide key={i} style={{ width: 'auto' }}
                    onClick={() =>
                      handleClick(category?.snippet?.title.replace("/", " "))
                    }>
                    <div
                      className={`rounded-full text-sm whitespace-nowrap text-gray-900 py-[6px] hover:bg-gray-200 px-3.5 cursor-pointer ${active === category?.snippet?.title ||
                        (!active && category?.snippet?.title === "All")
                        ? "bg-black text-white hover:bg-gray-900"
                        : "border border-gray-300 bg-gray-100"
                        }`}
                    >
                      {category?.snippet?.title.replace("/", " ")}
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </>
        )
        : <div className="flex items-center space-x-2" >
          {[...Array(15)].map((e, i) => <HeaderTagSkelenton key={i} />)}
        </div>}
    </div>
  );
}

export default HeaderTags;



