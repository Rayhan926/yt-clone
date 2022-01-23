// import { Swiper, SwiperSlide } from 'swiper/react';

// import dynamic from "next/dynamic";

// const Swiper = dynamic(() => import("swiper/react").then(mod => mod.Swiper));
// const SwiperSlide = dynamic(() => import("swiper/react").then(mod => mod.SwiperSlide));
import { useRef } from "react";
import SwiperCore, { Mousewheel, Navigation, Pagination } from "swiper";
import VideoSkeleton from '../components/Skeleton/VideoSkeleton';

SwiperCore.use([Navigation, Mousewheel, Pagination]);

function Test() {

    const nextElm = useRef(null)
    const prevElm = useRef(null)

    return (
        <div className="md:w-[300px] mx-auto my-20" >
            <VideoSkeleton />
        </div>
    )
}

export default Test
