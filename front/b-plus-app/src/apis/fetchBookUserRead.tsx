import axios from 'axios';
import { showBookUserReadsUrl } from "../urls/index";


export const fetchBookUserRead = (user_id: string) => {
  return axios.get(showBookUserReadsUrl(user_id), { withCredentials: true })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("失敗", e))
};
