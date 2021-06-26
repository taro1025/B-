import axios from 'axios';
import { showUserUrl } from "../urls/index";


export const getUserProfile = (user_id: string) => {
  return axios.get(showUserUrl(user_id), { withCredentials: true })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("ユーザープロフィールの取得失敗", e))
};
