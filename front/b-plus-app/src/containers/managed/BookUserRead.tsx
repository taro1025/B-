import { useEffect, useContext, useState } from "react"
import { User } from "../../App";
import { fetchBookUserRead } from "../../apis/fetchBookUserRead";
import styled from 'styled-components';
import { NoDecoLink } from "../../components/NoDecoLink";
import dummyImage from "../../dummyImage.jpeg"
import IconButton from '@material-ui/core/IconButton';
import SyncIcon from '@material-ui/icons/Sync';

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

const JumpWrapper = styled.div`
  position: fixed;
  top: 110px;
  left: 0.1rem;
`
const JumpBar = styled.div`
  width: .7rem;
  height: 500px;
  background-color: #333333;
  border-radius: 10px;
  opacity: 0.7;
  position: absolute;
  top:0;
  left: .25rem;

`
const RankWrapper = styled.div`
  position: relative;
  height: 500px;
  top:0;
  left: 0;
  display:flex;
  flex-flow: column;
  justify-content:space-between;
  z-index: 99
`

const CircleSpan = styled.span`
  opacity: initial;
  width: 1.3rem;
  height: 1.3rem;
  background-color: #111188;
  border-radius: 100%;
  color: white;
  text-align: center;
`

//ダミーデータを使用のためコメントアウトしてる
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
      <IconButton color="primary" aria-label="add to shopping cart">
        <SyncIcon />
      </IconButton>
      {
        isHierarchy ?
          <JumpWrapper>
            <RankWrapper>
              <CircleSpan>S</CircleSpan>
              <CircleSpan>A</CircleSpan>
              <CircleSpan>B</CircleSpan>
              <CircleSpan>C</CircleSpan>
              <CircleSpan>D</CircleSpan>
            </RankWrapper>
            <JumpBar />
          </JumpWrapper>
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
