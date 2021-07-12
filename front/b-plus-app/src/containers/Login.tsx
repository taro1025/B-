import { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';


import { createUser } from "../apis/user"
import { login } from '../apis/session';
import { loginProps, inputValueInterface } from "../interfaces"


const FormWrapper = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
`;

const TextFieldWrapper = styled.div`
  margin-top: 15px;
`

const ButtonWrapper = styled.div`
  margin-top: 15px;
`;

const InitialButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  appearance: none;
`



export const Login = (props: loginProps) => {


  const [state, setState] = useState<inputValueInterface>({ name: "", email: "", password: "", passwordConfirmation: "" })

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const [isLogin, setDisplay] = useState<boolean>(true)

  const handleSubmit = (event: any): void => {
    login({
      email: state.email,
      password: state.password
    }, props)

    event.preventDefault()
  }

  const handleSubmitSignUp = (event: any): void => {
    createUser({
      name: state.name,
      email: state.email,
      password: state.password,
      password_confirmation: state.passwordConfirmation
    })
  }

  //開発用ユーザー
  //email    titi#{1~10}@gmail.com
  //password testes1234
  return (
    <>
      {
        isLogin ?
          <div>
            <p>ログイン</p>
            <form>

              <FormWrapper>
                <TextFieldWrapper>
                  <TextField
                    id="standard-search"
                    label="Email"
                    name="email"
                    value={state.email}
                    onChange={event => handleInputChange(event)}
                  />
                </TextFieldWrapper>
                <TextFieldWrapper>
                  <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    name="password"
                    value={state.password}
                    onChange={event => handleInputChange(event)}
                  />
                </TextFieldWrapper>
                <ButtonWrapper>
                  <Button variant="contained" color="primary" type="submit"
                    onClick={handleSubmit}>
                    login
             </Button>
                  <InitialButton onClick={() => setDisplay(false)}>Sign up?</InitialButton>
                </ButtonWrapper>
              </FormWrapper>

            </form>
          </div>
          :
          <div>
            <p>サインアップ</p>
            <form>

              <FormWrapper>
                <TextFieldWrapper>
                  <TextField
                    id="standard-search"
                    label="Name"
                    name="name"
                    value={state.name}
                    onChange={event => handleInputChange(event)}
                  />
                </TextFieldWrapper>
                <TextFieldWrapper>

                  <TextField
                    id="standard-search"
                    label="Email"
                    name="email"
                    value={state.email}
                    onChange={event => handleInputChange(event)}
                  />
                </TextFieldWrapper>
                <TextFieldWrapper>
                  <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    name="password"
                    value={state.password}
                    onChange={event => handleInputChange(event)}
                  />
                </TextFieldWrapper>
                <TextFieldWrapper>
                  <TextField
                    id="standard-password-input"
                    label="Password Confirm"
                    type="password"
                    autoComplete="current-password"
                    name="passwordConfirmation"
                    value={state.passwordConfirmation}
                    onChange={event => handleInputChange(event)}
                  />
                </TextFieldWrapper>
                <ButtonWrapper>
                  <Button variant="contained" color="primary" type="submit"
                    onClick={handleSubmitSignUp}>
                    Sign Up
             </Button>
                  <InitialButton onClick={() => setDisplay(true)}>Login?</InitialButton>
                </ButtonWrapper>
              </FormWrapper>

            </form>
          </div>

      }
    </>
  )
}
