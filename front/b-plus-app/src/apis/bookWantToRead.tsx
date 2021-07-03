import { createBookWantToReadsUrl, showBookWantToReadsUrl } from "../urls/index";
import axios from 'axios';


export const registerWantToBook = (book_isbn: string, user_id: string, medium: string, large: string) => {
  return axios.post(createBookWantToReadsUrl,
    {
      book_isbn: book_isbn,
      id: user_id,
      medium_url: medium,
      url: large
    }, { withCredentials: true })
    .then(res => {
      console.log("成功")
      return res.data
    })
    .catch((e) => console.log("登録失敗", e))
};

export const fetchBookWantToRead = (user_id: string) => {
  return axios.get(showBookWantToReadsUrl(user_id), { withCredentials: true })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("login失敗", e))
};
