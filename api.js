import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBaGU24tiW1xPqwUrJjWGWQX5uHabNbDNs", // process.env.API_KEY,
  },
});

export default request;
