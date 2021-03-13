import { createApi } from "unsplash-js";
import axios from "axios";

export default {
    unsplash: createApi({ accessKey: "BYKd8TanY-MFPXBF3GlzYikT_A8Yk4WoZTVFaguRV3w" }),

    getPosts: function () {
        return axios.get("/api/posts")
    },
    savePosts: function (setFormObject) {
        return axios.post("/api/posts", setFormObject);
    },
    deletePost: function (id) {
        return axios.delete("/api/posts/" + id);
    }

}