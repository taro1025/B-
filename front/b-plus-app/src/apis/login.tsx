import axios from 'axios';
//import { string } from 'yargs';
import { loginUrl } from '../urls/index';
import { LoginInterface, loginProps } from '../interfaces'



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
