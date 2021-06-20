import { Dispatch, SetStateAction } from 'react';


export interface LoginInterface {
  email: string;
  password: string;
}

//export type IState = {
//  name: string,
//  id?: number
//}
export type IState = {

  name: string,
  id?: number,
  email: string,
  password_digest: string,
  updated_at: string,
  created_at: string,


}

export interface loginProps {
  loginAction: (props: any, data: any) => void;
  loggedInStatus: boolean;
}

export interface searchProps {
  books: any;
  setBooks: React.Dispatch<any>
}
