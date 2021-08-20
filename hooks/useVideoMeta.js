import { useState } from "react";
import { useEffect } from "react";
import request from "./../api";

function useVideoMeta(videoId, parts) {
  const [loadingMeta, setLoadingMeta] = useState(true);
  const [errorMeta, setErrorMeta] = useState(false);
  const [videoMeta, setVideoMeta] = useState(null);
  useEffect(() => {
    setLoadingMeta(true);
    setErrorMeta(false);

    request("videos", {
      params: {
        part: parts || "snippet,statistics",
        id: videoId,
      },
    })
      .then((res) => {
        setLoadingMeta(false);
        setErrorMeta(false);
        setVideoMeta(res.data.items[0]);
      })
      .catch((err) => {
        setLoadingMeta(false);
        setErrorMeta(true);
        setVideoMeta(null);
      });
  }, [videoId]);
  return { loadingMeta, errorMeta, videoMeta };
}

export default useVideoMeta;
