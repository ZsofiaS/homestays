import axios from "axios";

const instance = axios.create({
  baseURL: "https://homestay-app-d9822.firebaseio.com/",
});

export default instance;
