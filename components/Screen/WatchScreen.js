import VideoHorizontal from "./../Video/VideoHorizontal";
import VideoMeta from "./../Video/VideoMeta";
import dynamic from "next/dynamic";
// import VideoComments from "./../Video/VideoComments";
import useVideoMeta from "./../../hooks/useVideoMeta";
import { useEffect, useState } from "react";
import request from "../../api";
import Video from "../Video/Video";

const VideoComments = dynamic(() => import("./../Video/VideoComments"), {
  loading: () => <p>Loading Comments..</p>,
});

function WatchScreen({ videoId }) {
  const { loadingMeta, errorMeta, videoMeta } = useVideoMeta(videoId);

  const [relatedVideos, setRelatedVideos] = useState([])
  const [loadingRelatedVideos, setloadingRelatedVideos] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    if (!videoId) return;
    setloadingRelatedVideos(true)
    setError(false)

    request.get('search', {
      params: {
        part: 'snippet',
        relatedToVideoId: videoId,
        maxResults: 20,
        type: 'video'
      }
    }).then(res => {
      setRelatedVideos(res.data.items)

    }).catch(err => {
      setError('Failed to load related videos')
    }).finally(() => setloadingRelatedVideos(false))
  }, [videoId])

  console.log(relatedVideos);

  return (
    <div className="gap-5 flex">
      <div className="w-[1500px]">
        <div className="w-full" style={{ aspectRatio: '16/9' }}>
          <iframe
            autoPlay="on"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Saymon"
            allowFullScreen
            src={`https://www.youtube.com/embed/${videoId}`}
          ></iframe>
        </div>
        {!loadingMeta && videoMeta && <VideoMeta meta={videoMeta} />}
        {videoMeta && <VideoComments meta={videoMeta} videoId={videoId} />}
      </div>
      <div className="flex-grow flex-shrink-0 max-w-[450px] min-w-[400px]">
        {relatedVideos?.map((relatedVideo, i) => {
          if (relatedVideo?.snippet?.channelId) {
            return <Video video={relatedVideo} key={i} layoutHorizontal />
          } else {
            return null
          }
        }
        )}
        {
          loadingRelatedVideos && <div className={`w-full py-8 text-center text-gray-800 bg-gray-50 text-xl font-semibold`} >Loading..</div>
        }
        {
          error && error
        }
      </div>
    </div>
  );
}

export default WatchScreen;
