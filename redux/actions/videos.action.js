import request from "../../api";
import {
  EMPTY_HOME_VIDEOS,
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  SEARCH_VIDEOS_FAIL,
  SEARCH_VIDEOS_REQUEST,
  SEARCH_VIDEOS_SUCCESS
} from "../actionType";

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });

    const res = await request("videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 12,
        pageToken: getState().homeVideos.nextPageToken,
      },
    });
    const data = res.data;

    // const data = popularVideos; // remove this line in production

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};

export const emptyVideos = () => (dispatch) => {
  dispatch({
    type: EMPTY_HOME_VIDEOS,
  })
}

export const getideosByCategory = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });

    const res = await request("search", {
      params: {
        part: "snippet",
        maxResults: 12,
        pageToken: getState().homeVideos.nextPageToken,
        q: keyword,
        type: "video",
      },
    });
    const data = res.data;
    // const data = popularVideos;

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};


export const getideosBySearch = (keyword) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_VIDEOS_REQUEST,
    });

    const res = await request("search", {
      params: {
        part: "snippet",
        maxResults: 12,
        q: keyword,
        type: "video,channel",
      },
    });
    const data = res.data;
    // const data = popularVideos;

    dispatch({
      type: SEARCH_VIDEOS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SEARCH_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};