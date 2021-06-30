import axios from 'axios';
import { createLikesUrl } from '../urls/index';
import { deleteLikesUrl } from '../urls/index';
import { indexLikesUrl } from '../urls/index';
import { checkLikesUrl } from "../urls/index";


export const createLike = (postId: number) => {
  return axios.post(createLikesUrl,
    {
      post_id: postId
    },
    { withCredentials: true })
    .then(res => {
      console.log("いいね成功", res)
      return res.data
    })
    .catch((e) => console.log("いいね失敗", e))
};

export const deleteLike = (postId: string) => {
  return axios.delete(deleteLikesUrl(postId), { withCredentials: true })
    .then(res => {
      console.log("いいね削除成功", res)
      return res.data
    })
    .catch((e) => console.log("いいねを消すことに失敗", e))
};

//userIdを持つユーザーのいいね全てをlikesで返す
export const indexLike = (userId: string) => {
  return axios.get(indexLikesUrl,
    {
      params: { id: userId },
      withCredentials: true
    })
    .then(res => {
      console.log("いいね 一覧げt", res)
      return res.data
    })
    .catch((e) => console.log("いいね一覧取得に失敗", e))
};


export const checkLike = (postId: string) => {
  return axios.get(checkLikesUrl,
    {
      params: { post_id: postId },
      withCredentials: true
    })
    .then(res => {
      console.log("いいね削除成功", res)
      return res.data
    })
    .catch((e) => console.log("いいねを消すことに失敗", e))
};
