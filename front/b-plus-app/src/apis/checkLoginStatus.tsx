import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { IState } from '../interfaces'
import { checkLoginUrl } from '../urls/index';



export const checkLoginStatus = (
  loggedInStatus: boolean,
  setLoggedInStatus: Dispatch<SetStateAction<boolean>>,
  setUser: Dispatch<SetStateAction<IState>>
) => {
  return axios.get(checkLoginUrl, { withCredentials: true })
    .then(response => {

      if (response.data.logged_in && loggedInStatus === false) {

        setLoggedInStatus(true)
        setUser({ name: response.data.user.name, id: response.data.user.id })
      } else if (!response.data.logged_in && loggedInStatus === true) {

        setLoggedInStatus(false)
        setUser({ name: "", id: 0 })
      }
    })
    .catch(error => {
      console.log("ログインエラー", error)
    })
}
