import { createBookWantToReadsUrl } from "../urls/index";
import axios from 'axios';


export const registerWantToBook = (book_isbn: string, user_id: string) => {
  return axios.post(createBookWantToReadsUrl,
    {
      book_isbn: book_isbn,
      id: user_id
    }, { withCredentials: true })
    .then(res => {
      console.log("成功")
      return res.data
    })
    .catch((e) => console.log("登録失敗", e))
};
