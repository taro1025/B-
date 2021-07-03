import axios from 'axios';
import { showBookUserReadsUrl, indexBookUserReadsUrl, createBookUserReadsUrl } from "../urls/index";


export const fetchBookUserRead = (user_id: string) => {
  return axios.get(showBookUserReadsUrl(user_id), { withCredentials: true })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("失敗", e))
};

export const getIndexBooks = (userId: number) => {
  return axios.get(indexBookUserReadsUrl,
    {
      params: { id: userId },
      withCredentials: true
    })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("失敗", e))
};


export const registerReadBook = (book_isbn: string, user_id: string, page: number | undefined) => {
  return axios.post(createBookUserReadsUrl,
    {
      book_isbn: book_isbn,
      id: user_id,
      page: page
    }, { withCredentials: true })
    .then(res => {
      console.log("読んだ本に追加成功", res)
      return res.data
    })
    .catch((e) => console.log("登録失敗", e))
};
