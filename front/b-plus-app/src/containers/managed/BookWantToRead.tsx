import { useEffect, useContext, useState } from "react"
import { User } from "../../App";
import { fetchBookWantToRead } from "../../apis/fetchBookWantToRead";
import styled from 'styled-components';
import { NoDecoLink } from "../../components/NoDecoLink";
import dummyImage from "../../dummyImage.jpeg"

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

`

const Li = styled.li`
  flex-basis: 33.3%;
`

const Img = styled.img`
  width: 100%;
  border: 1px solid #fff;
`

//ダミーデータを使用のためコメントアウトしてる
export const BookWantToRead = () => {

  //const [books, setBooks] = useState<any>()

  const context: any = useContext(User)

  const dummy_books: any = []
  for (let i = 0; i < 20; i++) {
    dummy_books.push(
      <Li><NoDecoLink to={`/book/9999999`}><Img src={dummyImage} /></NoDecoLink></Li>
    )
  }
  //res.booksは本のisbnが複数入ってる。本当はさらにこれを使ってAmazonAPIで本の情報を取得したい。
  useEffect(() => {
    if (context.user) {
      fetchBookWantToRead(context.user.id)
        .then(res => {
          //console.log("response", res.books)
          //setBooks(res.books)
        })
    }
  }, [])

  return (
    <Ul>
      {
        dummy_books.map((book: any) => {
          return book
        })
      }
      {
        //books &&
        //
        //books!.map((item: any) => {
        //  console.log("アイテム", item)
        //  return <p>{item.book_isbn}</p>
        //})
      }
    </Ul>
  )
}
