import { useState } from "react";
import { useEffect } from "react";
import request from "./../api";
import { useSelector } from "react-redux";
import axios from "axios";

function useSubscriptionStatus(channelId, parts) {
  const { accessToken } = useSelector((store) => store.auth);
  const [loadingSubscriptionStatus, setLoadingSubscriptionStatus] =
    useState(false);
  const [errorSubscriptionStatus, setErrorSubscriptionStatus] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  useEffect(() => {
    setLoadingSubscriptionStatus(true);
    setErrorSubscriptionStatus(false);

    axios("https://youtube.googleapis.com/youtube/v3/subscriptions", {
      params: {
        key: "AIzaSyDBC8tPskT90S_rlas2lWW_OkP-o7UKVgA", // process.env.API_KEY,
        part: parts || "snippet,contentDetails",
        forChannelId: channelId,
        mine: true,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    })
      .then((res) => {
        setLoadingSubscriptionStatus(false);
        setErrorSubscriptionStatus(false);
        setSubscriptionStatus(res.data);
      })
      .catch((err) => {
        setLoadingSubscriptionStatus(false);
        setErrorSubscriptionStatus(true);
        setSubscriptionStatus(null);
      });
  }, [channelId, parts]);
  return {
    loadingSubscriptionStatus,
    errorSubscriptionStatus,
    subscriptionStatus,
  };
}

export default useSubscriptionStatus;
