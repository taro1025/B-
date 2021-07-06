import axios from 'axios';
import { getGraphDataUrl, getMonthDataUrl } from "../urls/index";


export const getMonthData = (user_id: string) => {
  return axios.get(getMonthDataUrl(user_id), { withCredentials: true })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("グラフデータの取得失敗", e))
};


export const getGraphData = (user_id: string) => {
  return axios.get(getGraphDataUrl(user_id), { withCredentials: true })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("グラフデータの取得失敗", e))
};
