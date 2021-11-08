// import { Swiper, SwiperSlide } from 'swiper/react';

// import dynamic from "next/dynamic";

// const Swiper = dynamic(() => import("swiper/react").then(mod => mod.Swiper));
// const SwiperSlide = dynamic(() => import("swiper/react").then(mod => mod.SwiperSlide));

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Mousewheel, Pagination } from "swiper";

SwiperCore.use([Navigation, Mousewheel, Pagination]);

function Test() {
    return (
        <div className="w-[700px] mt-[80px] mx-auto border border-green-100">
            <Swiper
                mousewheel={true}
                direction={'horizontal'}
                slidesPerView={1}
                pagination={{
                    "clickable": true
                }}
            >
                {
                    [...new Array(10)].map((i, e) => (
                        <SwiperSlide key={e}>Slide {e}</SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Test
