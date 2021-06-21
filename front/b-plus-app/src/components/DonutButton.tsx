import styled from "styled-components"
import { registerWantToBook } from "../apis/registerWantToBook"
import { registerReadBook } from "../apis/registerReadBook"
import { useContext } from 'react'
import { User } from "../App"
//メ　モ
//本当はドーナツ型のボタンにしたかったのだけどやり方が分からなかった。
const Wrapper = styled.div`

`

const Ul = styled.ul`
 display: flex;
 //width: 100%;
 //justify-content: space-between;
 border: solid 1px red;
`

const Button = styled.button`
  color: initial;
  background-color: initial;
  flex: auto;
  text-align: center;
  line-height: 60px;
  height: 60px;
  border: solid 0.5px black;
`


export const DonutButton = (props: { isbn: string }) => {

  const context: any = useContext(User)
  //console.log("userrr", user.user.id)
  const handleWantToBook = () => {
    if (context.user) {
      registerWantToBook(props.isbn, context.user.id)
    } else {
      console.log("ログインが必要")
    }
  }

  const handleReadBook = () => {
    if (context.user) {
      registerReadBook(props.isbn, context.user.id)
    } else {
      console.log("ログインが必要")
    }
  }

  return (
    <Wrapper>
      <Ul>
        <Button onClick={() => handleReadBook()}>読んだ本に登録</Button>
        <Button onClick={() => handleWantToBook()}>読みたい本に登録</Button>
        <Button>人生の本に登録</Button>
      </Ul>
    </Wrapper>

  );
};
