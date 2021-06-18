import axios from 'axios';
//import { string } from 'yargs';
import { loginUrl } from '../urls/index';

interface Login {
  email: string;
  password: string;
}

export const login = (params: Login) => {
  return axios.post(loginUrl,
    {
      session: {
        email: params.email,
        password: params.password
      }
    },
    { withCredentials: true })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("login失敗", e))
};
