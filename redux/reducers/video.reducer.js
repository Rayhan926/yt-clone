import {
  EMPTY_HOME_VIDEOS,
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  SEARCH_VIDEOS_FAIL,
  SEARCH_VIDEOS_REQUEST,
  SEARCH_VIDEOS_SUCCESS
} from "../actionType";

export const homeVideoReducer = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: "All",
    errorFetchVideos: false
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos:
          state.activeCategory === payload.category
            ? [...state.videos, ...payload.videos]
            : payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
        errorFetchVideos: false
      };
    case HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        errorFetchVideos: payload.error,
      };
    case EMPTY_HOME_VIDEOS:
      return {
        videos: [],
        loading: true,
        error: false,
      };
    case HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};



export const searchVideoReducer = (
  state = {
    loading: true,
    videos: [],
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case SEARCH_VIDEOS_FAIL:
      return {
        ...state,
        videos: payload,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
