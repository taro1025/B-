import React from "react";
import { createUser } from "../apis/createUser"
import { login } from "../apis/login"
export const TopPage: React.FC = () => {

  createUser(
    {
      name: "ta",
      password: "test1234",
      password_confirmation: "test1234",
      email: "gam4967@gmail.com"
    }
  )
  type Res = {
    res: {
      message: string
    }
  }
  login(
    {
      email: "game4967@gmail.com",
      password: "test1234"
    }

  )
  return (
    <div className="App">
      <h1>Hello !!!</h1>
    </div>
  )
}
