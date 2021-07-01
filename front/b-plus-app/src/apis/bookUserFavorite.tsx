import axios from "axios";
import { createBookUserFavoritesUrl } from "../urls/index"

export const registerReadBook = (book_isbn: string, userId: number, summary: string, description: string) => {
  return axios.post(createBookUserFavoritesUrl,
    {
      book_isbn: book_isbn,
      id: userId,
      description_summary: summary,
      description: description
    }, { withCredentials: true })
    .then(res => {
      console.log("読んだ本に追加成功", res)
      return res.data
    })
    .catch((e) => console.log("人生の本、登録失敗", e))
};
