import axios from 'axios';
import { timelineUrl } from "../urls/index";


export const getTimeline = () => {
  return axios.get(timelineUrl, { withCredentials: true })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("タイムラインの取得失敗", e))
};
