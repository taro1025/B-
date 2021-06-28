import axios from 'axios';
import { getBooksUrl } from '../urls/index';



export const getBooks = (isbn: string) => {
  return axios.get(encodeURI(getBooksUrl(isbn)))
    .then(response => {
      console.log("成功", response.data)
      return response.data
    }
    )
    .catch(error => {
      console.log("検索失敗", error)
    })
}
