import { useState } from "react";
import { useEffect } from "react";
import request from "./../api";

function useChannelMeta(channelId, parts) {
  const [loadingChannelMeta, setLoadingChannelMeta] = useState(false);
  const [errorChannelMeta, setErrorChannelMeta] = useState(false);
  const [channelMeta, setChannelMeta] = useState(null);
  useEffect(() => {
    setLoadingChannelMeta(true);
    setErrorChannelMeta(false);

    request("channels", {
      params: {
        part: parts || "snippet",
        id: channelId,
      },
    })
      .then((res) => {
        setLoadingChannelMeta(false);
        setErrorChannelMeta(false);
        setChannelMeta(res.data.items[0]);
      })
      .catch((err) => {
        setLoadingChannelMeta(false);
        setErrorChannelMeta(true);
        setChannelMeta(null);
      });
  }, [channelId]);
  return { loadingChannelMeta, errorChannelMeta, channelMeta };
}

export default useChannelMeta;
