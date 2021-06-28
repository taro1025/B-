import axios from 'axios';
import { showBookWantToReadsUrl } from "../urls/index";


export const fetchBookWantToRead = (user_id: string) => {
  return axios.get(showBookWantToReadsUrl(user_id), { withCredentials: true })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("login失敗", e))
};
