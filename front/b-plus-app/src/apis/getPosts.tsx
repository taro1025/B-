import axios from 'axios';
import { indexPostsUrl, showPostsUrl } from "../urls/index";


export const getPosts = (isbn: string) => {
  return axios.get(indexPostsUrl,
    {
      params: { book_isbn: isbn }
    })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("感想一覧の取得失敗", e))
};

export const getMyPosts = (isbn: string, userId: string) => {
  return axios.get(showPostsUrl(userId),
    {
      params: {
        book_isbn: isbn
      },
      withCredentials: true
    })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("自分の感想の取得失敗", e))
};
