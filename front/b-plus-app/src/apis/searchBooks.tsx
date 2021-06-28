import axios from 'axios';
import { searchBooksUrl } from '../urls/index';



export const searchBooks = (word: string) => {
  return axios.get(encodeURI(searchBooksUrl(word)))
    .then(response => {
      console.log("成功", response.data)
      return response.data
    }
    )
    .catch(error => {
      console.log("検索失敗", error)
    })
}
