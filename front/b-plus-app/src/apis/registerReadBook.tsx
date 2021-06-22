import { createBookUserReadsUrl } from "../urls/index";
import axios from 'axios';


export const registerReadBook = (book_isbn: string, user_id: string) => {
  return axios.post(createBookUserReadsUrl,
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
