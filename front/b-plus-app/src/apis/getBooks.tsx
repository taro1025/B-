import axios from 'axios';
import { getBooksUrl } from '../urls/index';



export const getBooks = (isbn: string) => {
  return axios.get(encodeURI(getBooksUrl(isbn)))
    .then(response => {
      return response.data
    }
    )
    .catch(error => {
      console.log("検索失敗", error)
    })
}
