import axios from 'axios';
import { createUserUrl, updateUserUrl } from '../urls/index';

interface User {
  name: string,
  password: string,
  password_confirmation: string,
  email: string
}

export const createUser = (params: User) => {
  return axios.post(createUserUrl,
    {
      user: {
        name: params.name,
        email: params.email,
        password: params.password,
        password_confirmation: params.password_confirmation
      }
    },
    { withCredentials: true })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("login失敗", e))
};


export const updateUser = (userId: number, data: FormData) => {
  return axios.patch(updateUserUrl(String(userId)), data, { withCredentials: true })
    .then(res => {
      return res.data
    })
    .catch((e) => console.log("編集失敗", e))
};
