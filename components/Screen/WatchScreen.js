import VideoHorizontal from "./../Video/VideoHorizontal";
import VideoMeta from "./../Video/VideoMeta";
import dynamic from "next/dynamic";
// import VideoComments from "./../Video/VideoComments";
import useVideoMeta from "./../../hooks/useVideoMeta";

const VideoComments = dynamic(() => import("./../Video/VideoMeta"), {
  loading: () => <p>Loading Comments..</p>,
});

function WatchScreen({ videoId }) {
  const { loadingMeta, errorMeta, videoMeta } = useVideoMeta(videoId);
  return (
    <div className="gap-5 flex">
      <div className="min-h-10 w-full">
        <div className="w-full h-[70vh]">
          <iframe
            autoPlay
            width="100%"
            height="100%"
            frameBorder="0"
            title="Saymon"
            allowFullScreen
            src={`https://www.youtube.com/embed/${videoId}`}
          ></iframe>
        </div>
        {!loadingMeta && videoMeta && <VideoMeta meta={videoMeta} />}
        {/* <VideoComments meta={videoMeta} />  */}
      </div>
      <div className="min-h-10 w-[550px]">
        {[...Array(20)].map((e, i) => (
          <VideoHorizontal key={i} />
        ))}
      </div>
    </div>
  );
}

export default WatchScreen;
