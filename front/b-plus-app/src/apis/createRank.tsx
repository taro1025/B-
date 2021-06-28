import axios from 'axios';
import { createRanksUrl } from '../urls/index';


export const createRank = (user_id: number, rank: any, isbn: string) => {
  return axios.post(createRanksUrl,
    {
      id: user_id,
      rank_id: rank,
      book_isbn: isbn
    }, { withCredentials: true })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("ランクづけ失敗", e))
};
