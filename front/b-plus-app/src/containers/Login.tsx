import { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { NoDecoLink } from '../components/NoDecoLink';

import { createUser } from "../apis/createUser"
import { login } from '../apis/login';
import { loginProps } from "../interfaces"


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


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [isLogin, setDisplay] = useState<boolean>(true)

  const handleSubmit = (event: any): void => {
    login({
      email: email,
      password: password
    }, props)

    event.preventDefault()
  }

  const handleSubmitSignUp = (event: any): void => {
    createUser({
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    })
  }

  //開発用ユーザー
  //email    titi#{1=10}@gmail.com
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
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                  />
                </TextFieldWrapper>
                <TextFieldWrapper>
                  <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    name="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
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
                    value={name}
                    onChange={event => setName(event.target.value)}
                  />
                </TextFieldWrapper>
                <TextFieldWrapper>

                  <TextField
                    id="standard-search"
                    label="Email"
                    name="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                  />
                </TextFieldWrapper>
                <TextFieldWrapper>
                  <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    name="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                  />
                </TextFieldWrapper>
                <TextFieldWrapper>
                  <TextField
                    id="standard-password-input"
                    label="Password Confirm"
                    type="password"
                    autoComplete="current-password"
                    name="password"
                    value={passwordConfirmation}
                    onChange={event => setPasswordConfirmation(event.target.value)}
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
