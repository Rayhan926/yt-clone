import { useRouter } from "next/dist/client/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Layout from "../../components/Layout/Layout"
import VideoSkeleton from "../../components/Skeleton/VideoSkeleton"
import Video from "../../components/Video/Video"
import { getideosBySearch } from "../../redux/actions/videos.action"


function SearchPage() {
    const clientWidth = typeof window !== 'undefined' ? window?.document?.documentElement?.clientWidth : 0
    console.log(clientWidth);
    const router = useRouter()
    const searchQuery = router.query?.query
    const dispatch = useDispatch()
    useEffect(() => {
        if (searchQuery) {
            dispatch(getideosBySearch(searchQuery))
        }
    }, [searchQuery, dispatch])

    const { videos, loading } = useSelector(state => state.searchVideos)
    return (
        <Layout>
            <div className="p_x md:py-10 md:px-12 md:bg-gray-100" >
                {!loading && videos?.length > 0 && (
                    videos?.map((video, i) => (
                        <Video key={i} layoutHorizontal video={video} className="grid-cols-[35%,auto]" />
                    ))
                )}
                {
                    loading && (
                        [...new Array(10).keys()].map(e => <VideoSkeleton key={e} height={clientWidth > 900 ? 195 : 94} layoutHorizontal gridClass="grid-cols-[35%,auto]" className="mb-5" />)
                    )
                }
            </div>
        </Layout>
    )
}

export default SearchPage
