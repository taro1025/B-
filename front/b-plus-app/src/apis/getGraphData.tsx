import axios from 'axios';
import { getGraphDataUrl } from "../urls/index";


export const getGraphData = (user_id: string) => {
  return axios.get(getGraphDataUrl(user_id), { withCredentials: true })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("グラフデータの取得失敗", e))
};
