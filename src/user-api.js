import axios from "axios";

export default axios.create({
    baseURL: "https://https://randomuser.me/api/",
    responseType: "json"
});
