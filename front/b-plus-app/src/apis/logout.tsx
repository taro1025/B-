import axios from 'axios';
import { logoutUrl } from '../urls/index';


export const logout = (user_id: number) => {
  return axios.delete(logoutUrl,
    {
      params: {
        user_id: user_id
      },
      withCredentials: true
    })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("login失敗", e))
};
