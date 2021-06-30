import { AllInboxOutlined } from '@material-ui/icons';
import axios from 'axios';
import { notificationsUrl, checkNoticeUrl, checkedNoticeUrl } from "../urls/index";


export const getNotice = () => {
  return axios.get(notificationsUrl, { withCredentials: true })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("通知の取得失敗", e))
};


export const checkNotice = () => {
  return axios.get(checkNoticeUrl, { withCredentials: true })
    .then(res => {
      console.log("既読つけてないのある？", res)
      return res.data
    })
    .catch((e) => console.log("通知の確認失敗", e))
};

export const checkedNotice = () => {
  return axios.get(checkedNoticeUrl, { withCredentials: true })
    .then(res => {
      console.log("既読がついたか", res)
      return res.data
    })
    .catch((e) => console.log("既読失敗", e))
};
