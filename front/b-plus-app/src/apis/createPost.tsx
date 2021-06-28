import axios from 'axios';
//import { string } from 'yargs';
import { createPostsUrl } from '../urls/index';


export const createPost = (impression: string, book_isbn: string) => {
  return axios.post(createPostsUrl,
    {
      impression: impression,
      book_isbn: book_isbn
    }, { withCredentials: true })
    .then(res => {
      console.log("感想が作れているか", res)
      return res.data
    })
    .catch((e) => console.log("投稿失敗", e))
};
