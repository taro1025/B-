import dummyImage from "../dummyImage.jpeg"
import { NoDecoLink } from "./NoDecoLink";
import styled from 'styled-components';

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


export const IndexBooks = (props: { books: any, isRakuten: boolean }) => {

  const dummy_books: any = []
  for (let i = 0; i < 20; i++) {
    dummy_books.push(
      <Li><NoDecoLink to={`/book/9999999`}><Img src={dummyImage} /></NoDecoLink></Li>
    )
  }
  return (
    <Ul>
      {
        //dummy_books.map((book: any) => {
        //  return book
        //})
      }
      {
        props.isRakuten ?
          props.books!.map((book: any) => {
            console.log("", book)
            return <Li><NoDecoLink to={`/book/${book.isbn}`}><Img src={book.Item.largeImageUrl} /></NoDecoLink></Li>
          })
          :
          props.books &&

          props.books!.map((book: any) => {
            console.log("", book)
            return <Li><NoDecoLink to={`/book/${book.book_isbn}`}><Img src={book.url} /></NoDecoLink></Li>
          })
      }

    </Ul>
  )
}
