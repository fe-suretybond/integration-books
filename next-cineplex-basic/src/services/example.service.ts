/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

export default {
  async hello() {
    const response = await axios.get(BASE_URL + "/hello");
    const data = await response.data;

    return data;
  },
};
