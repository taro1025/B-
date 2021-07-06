import axios from 'axios';
import { followsUrl, unfollowsUrl, isFollowUrl } from '../urls/index';


export const follow = (otherUserId: string) => {
  return axios.post(followsUrl,
    {
      id: otherUserId
    },
    { withCredentials: true })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("follow失敗", e))
};



export const unfollow = (otherUserId: string) => {
  return axios.delete(unfollowsUrl(otherUserId),
    {
      withCredentials: true
    })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("follow解除失敗", e))
};

export const isFollow = (otherId: string, userId: string) => {
  return axios.get(isFollowUrl(otherId),
    {
      params: { user_id: userId },
      withCredentials: true
    })
    .then(response => {
      console.log("レスポンス", response)
      return response.data
    }
    )
    .catch(error => {
      console.log("follow確認失敗", error)
    })
}
