import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { IState } from '../interfaces'
import { checkLoginUrl, logoutUrl, loginUrl } from '../urls/index';
import { LoginInterface, loginProps } from '../interfaces'



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

export const login = (params: LoginInterface, props: loginProps) => {
  return axios.post(loginUrl,
    {
      session: {
        email: params.email,
        password: params.password
      }
    },
    { withCredentials: true })
    .then(res => {
      if (res.data.logged_in) {
        console.log("ログインしたときのpropsとresdata", props, res.data)
        props.loginAction(props, res.data)
      }
      return res.data
    })
    .catch((e) => console.log("login失敗", e))
};


export const logout = (user_id: number) => {
  return axios.delete(logoutUrl,
    {
      params: {
        user_id: user_id
      },
      withCredentials: true
    })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("login失敗", e))
};
