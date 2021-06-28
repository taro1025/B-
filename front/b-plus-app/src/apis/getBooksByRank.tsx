import axios from 'axios';
import { showRanksUrl } from '../urls/index';



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
