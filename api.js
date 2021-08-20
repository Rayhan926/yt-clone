import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyDBC8tPskT90S_rlas2lWW_OkP-o7UKVgA", // process.env.API_KEY,
  },
});

export default request;
