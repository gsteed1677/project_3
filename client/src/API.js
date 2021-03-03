import Unsplash from "unsplash-js";

const APP_ACCESS_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

const unsplash = new Unsplash({
  applicationId: APP_ACCESS_KEY,
  secret: API_SECRET
});

export default unsplash;