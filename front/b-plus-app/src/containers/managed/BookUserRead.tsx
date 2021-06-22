import { useEffect, useContext, useState } from "react"
import { User } from "../../App";
import { fetchBookUserRead } from "../../apis/fetchBookUserRead";
import styled from 'styled-components';
import { NoDecoLink } from "../../components/NoDecoLink";
import dummyImage from "../../dummyImage.jpeg"
import IconButton from '@material-ui/core/IconButton';
import SyncIcon from '@material-ui/icons/Sync';
import { Hierarchy } from "../../components/Hierarchy"

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

const MyIconButton = styled(IconButton)`
  padding:initial;
`




//ダミーデータを使用のためコメントアウトしてる
//画面切り替えボタンのMuiBoxのpaddingを無くしたい.
export const BookUserRead = () => {


  const [isHierarchy, setHierarchy] = useState(true)
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
      fetchBookUserRead(context.user.id)
        .then(res => {
          //console.log("response", res.books)
          //setBooks(res.books)
        })
    }
  }, [])


  return (
    <>
      <MyIconButton size="small" color="primary" aria-label="add to shopping cart">
        <SyncIcon />
      </MyIconButton>
      {
        isHierarchy ?
          <Hierarchy />
          :
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
      }

    </>
  )
}
