import axios from 'axios';
import { getMonthDataUrl } from "../urls/index";


export const getMonthData = (user_id: string) => {
  return axios.get(getMonthDataUrl(user_id), { withCredentials: true })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("グラフデータの取得失敗", e))
};
