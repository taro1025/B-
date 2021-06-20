import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { IState } from '../interfaces'
import { checkLoginUrl } from '../urls/index';



export const checkLoginStatus = (
  loggedInStatus: boolean,
  setLoggedInStatus: Dispatch<SetStateAction<boolean>>,
  setUser: Dispatch<SetStateAction<IState | undefined>>
) => {
  return axios.get(checkLoginUrl, { withCredentials: true })
    .then(response => {

      if (response.data.logged_in && loggedInStatus === false) {

        setLoggedInStatus(true)
        setUser({ ...response.data.user })
      } else if (!response.data.logged_in && loggedInStatus === true) {

        setLoggedInStatus(false)
        setUser(undefined)
      }
    })
    .catch(error => {
      console.log("ログインエラー", error)
    })
}
