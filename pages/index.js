import { useDispatch, useSelector } from "react-redux";
import Video from "../components/Video/Video";
import Login from "../components/Login";
import Layout from "./../components/Layout/Layout";
import { useCallback, useEffect, useRef } from "react";
import { useState } from "react";
import Loading from "./../components/Loading";
import {
  getideosByCategory,
  getPopularVideos,
} from "./../redux/actions/videos.action";
import VideoSkeleton from "../components/Skeleton/VideoSkeleton";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);
  const { accessToken } = useSelector((store) => store.auth);
  const { videos, activeCategory, loading } = useSelector(
    (store) => store.homeVideos
  );
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    accessToken ? setIsAuthenticated(true) : setIsAuthenticated(false);
  }, [accessToken]);

  const fetchData = () => {
    activeCategory === "All"
      ? dispatch(getPopularVideos())
      : dispatch(getideosByCategory(activeCategory));
  };

  const observer = useRef();
  const lastVideoElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          // fetchData();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  if (isAuthenticated === null) return <Loading />;
  return (
    <>
      {isAuthenticated ? (
        <Layout withTopCategory>
          {
            videos?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {videos.map((video, index) => {
                  if (videos.length === index + 1) {
                    return (
                      <div ref={lastVideoElement} key={index}>
                        <Video video={video} key={index} />
                      </div>
                    );
                  } else {
                    return <Video video={video} key={index} />;
                  }
                })}
              </div>
            ) : (
              <h3>Error</h3>
            )
          }

          {
            loading && (
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {[...new Array(8)].map((e, i) => (
                  <VideoSkeleton key={i} />
                ))
                }
              </div>
            )
          }
        </Layout>
      ) : (
        <Login />
      )}
    </>
  );
}
