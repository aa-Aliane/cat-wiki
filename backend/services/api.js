import axios from "axios";

const api_url = "https://api.thecatapi.com/v1/";
const api_key =
  "live_9ZCo8tJYwDenStyixohKO3gVMfOWwWffKNp7jtDaviTfLconiktI7k09mifBwQZe";

export const api = axios.create({
  baseURL: api_url,
  headers: {
    "X-api_key": api_key,
    "Content-Type": "application/json",
  },
});


