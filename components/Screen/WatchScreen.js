import VideoHorizontal from "./../Video/VideoHorizontal";
import VideoMeta from "./../Video/VideoMeta";
import dynamic from "next/dynamic";
// import VideoComments from "./../Video/VideoComments";
import useVideoMeta from "./../../hooks/useVideoMeta";
import { useEffect, useState } from "react";
import request from "../../api";
import Video from "../Video/Video";
import VideoSkeleton from "../Skeleton/VideoSkeleton";

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


  return (
    <div className="w-full grid grid-cols-[auto,450px] gap-5">
      <div className="overflow-auto">
        <div>
          <iframe
            autoPlay="on"
            width="100%"
            height="100%"
            style={{ aspectRatio: '16/9' }}
            frameBorder="0"
            title="Saymon"
            allowFullScreen
            src={`https://www.youtube.com/embed/${videoId}`}
          ></iframe>

          {!loadingMeta && videoMeta && <VideoMeta meta={videoMeta} />}
          {videoMeta && <VideoComments meta={videoMeta} videoId={videoId} />}

        </div>
      </div>
      <div>
        <div>
          {relatedVideos?.map((relatedVideo, i) => {
            if (relatedVideo?.snippet?.channelId) {
              return <Video video={relatedVideo} key={i} layoutHorizontal />
            } else {
              return null
            }
          }
          )}
          {
            loadingRelatedVideos && [...new Array(10)].map((e, i) => (
              <VideoSkeleton layoutHorizontal key={i} className="mb-3" />
            ))
          }
          {
            error && error
          }
        </div>
      </div>

    </div>
  )
}

export default WatchScreen
