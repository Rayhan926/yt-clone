// import { Swiper, SwiperSlide } from 'swiper/react';

// import dynamic from "next/dynamic";

// const Swiper = dynamic(() => import("swiper/react").then(mod => mod.Swiper));
// const SwiperSlide = dynamic(() => import("swiper/react").then(mod => mod.SwiperSlide));
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Mousewheel, Pagination } from "swiper";
import { useRef } from "react";

SwiperCore.use([Navigation, Mousewheel, Pagination]);

function Test() {

    const nextElm = useRef(null)
    const prevElm = useRef(null)

    return (
        <div className="w-[900px] mt-[80px] mx-auto border border-green-100 relative">
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
                <button className="swiper_navigation_button prev_button left-0 justify-start" ref={prevElm}><BsChevronLeft className="w-6 h-6 text-gray-700" /></button>
                <button className="swiper_navigation_button next_button right-0 justify-end" ref={nextElm}><BsChevronRight className="w-6 h-6 text-gray-700" /></button>
                {
                    [...new Array(30)].map((i, e) => (
                        <SwiperSlide key={e} style={{ width: 'auto' }}>
                            <div
                                className={`rounded-full text-sm whitespace-nowrap text-gray-900 py-[6px] hover:bg-gray-200 px-3.5 cursor-pointer border border-gray-300 bg-gray-100`}
                            >
                                Category
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Test
