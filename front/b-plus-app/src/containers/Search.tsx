import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { searchBooks } from "../apis/searchBooks"
import { NoDecoLink } from "../components/NoDecoLink";
import { bookStateProps } from "../interfaces"
import packagelock from "../package-lock.jpeg" //ダミー画像


export const Search = (props: bookStateProps) => {

  const [word, setWord] = useState<string>("")
  let books = props.books
  //const setBooks = props.setBooks
  //このbooksデータはダミー。isbnがgoogleapiになかったので。
  books = [

    [{
      isbn: "0123456789",
      title: "進撃の巨人1"
    }],
    [{
      isbn: "1123456789",
      title: "進撃の巨人1"
    }],
    [{
      isbn: "2123456789",
      title: "進撃の巨人1"
    }],
    [{
      isbn: "3123456789",
      title: "進撃の巨人1"
    }]
  ]
  console.log(books)
  //setBooks(books)


  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("これから検索")
    searchBooks(word)
      .then(res => {
        //setBooks(res.items)
        //console.log(books)
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

      {books && (
        <div>
          {books.map((item: any, i: number) => {
            console.log("item", item)
            return (

              < div key={item.id} > <NoDecoLink to={`/book/${item[0].isbn}`}><img src={packagelock}></img></NoDecoLink></div>
            )
          })}
        </div>
      )
      }

    </div >
  )
}
