import axios from 'axios';
import { createCommentsUrl } from '../urls/index';


export const createComment = (postId: number, comment: string) => {
  return axios.post(createCommentsUrl,
    {
      post_id: postId,
      comment: comment
    }, { withCredentials: true })
    .then(res => {
      console.log("コメント", res)
      return res.data
    })
    .catch((e) => console.log("投稿失敗", e))
};
