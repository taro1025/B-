import { Dispatch, SetStateAction } from 'react';


export interface LoginInterface {
  email: string;
  password: string;
}

export type IState = {
  name: string,
  id: number
}

export interface loginProps {
  loginAction: (props: any, data: any) => void;
  loggedInStatus: boolean;
}
