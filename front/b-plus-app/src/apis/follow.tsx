import axios from 'axios';
import { followsUrl } from '../urls/index';
import { unfollowsUrl } from '../urls/index';

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
