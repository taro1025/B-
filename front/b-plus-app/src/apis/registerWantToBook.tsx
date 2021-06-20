import { createBookWantToReadsUrl } from "../urls/index";
import axios from 'axios';


export const registerWantToBook = (book_isbn: string) => {
  return axios.post(createBookWantToReadsUrl,
    {
      book_isbn: book_isbn
    })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("登録失敗", e))
};
