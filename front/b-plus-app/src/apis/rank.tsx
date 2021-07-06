import axios from 'axios';
import { createRanksUrl, getRanksUrl, showRanksUrl } from '../urls/index';


export const createRank = (user_id: number, rank: any, isbn: string, url: string, mediumUrl: string) => {
  return axios.post(createRanksUrl,
    {
      id: user_id,
      rank_id: rank,
      book_isbn: isbn,
      url: url,
      medium_url: mediumUrl
    }, { withCredentials: true })
    .then(res => {
      console.log("rrank es", res)
      return res.data
    })
    .catch((e) => console.log("ランクづけ失敗", e))
};

export const getRank = (userId: number, isbn: string) => {
  return axios.get(getRanksUrl,
    {
      params: {
        id: userId,
        book_isbn: isbn
      }
    })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("ランク取得しっぱい", e))
};

export const getBooksByRank = (userId: string) => {
  return axios.get(encodeURI(showRanksUrl(userId)))
    .then(response => {
      return response.data
    }
    )
    .catch(error => {
      console.log("検索失敗", error)
    })
}
