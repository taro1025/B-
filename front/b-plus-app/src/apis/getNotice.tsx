import axios from 'axios';
import { notificationsUrl } from "../urls/index";


export const getNotice = () => {
  return axios.get(notificationsUrl, { withCredentials: true })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("通知の取得失敗", e))
};
