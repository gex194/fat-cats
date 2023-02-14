import axios from "axios";

export const medium = axios.create({
  baseURL: "https://api.medium.com/v1",
  headers: {
    Host: "api.medium.com",
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Charset": "utf-8",
  },
});

export const rss2json = axios.create({
  baseURL: "https://api.rss2json.com/v1/api.json",
});
