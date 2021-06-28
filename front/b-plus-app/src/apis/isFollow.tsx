import axios from 'axios';
import { isFollowUrl } from '../urls/index';



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
