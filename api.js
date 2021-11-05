import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyB-sBl8XI3UYEnEJN_2Km6Q6MO2aGlVpFk", // process.env.API_KEY,
  },
});

export default request;
