import axios from "axios";

export const config = {
  baseURL: "http://localhost:8080/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const request = axios.create(config);
