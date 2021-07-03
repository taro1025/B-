import React, { useState } from 'react';
import { IndexBooks } from "../components/IndexBooks"
import TextField from '@material-ui/core/TextField';
import { searchBooks } from "../apis/searchBooks"
import { NoDecoLink } from "../components/NoDecoLink";
import { bookStateProps } from "../interfaces"
import packagelock from "../package-lock.jpeg" //ダミー画像
import { dummy_books } from "../dummyData"

export const Search = (props: bookStateProps) => {

  const [word, setWord] = useState<string>("")
  let books = props.books
  const setBooks = props.setBooks


  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("これから検索")
    searchBooks(word)
      .then(res => {
        setBooks(res.Items)
        console.log(books)
      })
  }

  return (
    <div>
      <form>

        <TextField
          id="standard-basic"
          label="本をさがす"
          value={word}
          onChange={e => setWord(e.target.value)}
        />


        <button type="submit" onClick={(e) => handleClick(e)}>
          送信
          </button>

      </form>

      {
        books && (
          <IndexBooks books={books} isRakuten={true} />
          //   <div>
          //     {books.map((book: any, i: number) => {
          //       console.log("book", book)
          //       return (
          //
          //         < div key={book.id} > <NoDecoLink to={`/book/${book.Item.isbn}`}><img src={book.Item.largeImageUrl}></img></NoDecoLink></div>
          //       )
          //     })}
          //   </div>
        )
      }
      {
        //dummy_books && (
        //  <div>
        //    {dummy_books.map((item: any, i: number) => {
        //      console.log("item", item)
        //      return (

        //        < div key={item.id} > <NoDecoLink to={`/book/${item[0].isbn}`}><img src={packagelock}></img></NoDecoLink></div>
        //      )
        //    })}
        //  </div>
        //)
      }
    </div >
  )
}
