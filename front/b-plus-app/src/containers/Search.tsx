import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { searchBooks } from "../apis/searchBooks"
import { NoDecoLink } from "../components/NoDecoLink";
import { searchProps } from "../interfaces"


export const Search = (props: searchProps) => {

  const [word, setWord] = useState<string>("")
  //const [books, setBooks] = useState<any>()
  const books = props.books
  const setBooks = props.setBooks

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("これから検索")
    searchBooks(word)
      .then(res => {
        setBooks(res.items)
        console.log("res items", res.items)
        console.log("setできてるか", books)
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
          {books.map((item: any) => {
            return (
              item.volumeInfo.imageLinks ?
                <div key={item.id}><img src={item.volumeInfo.imageLinks.smallThumbnail} /></div>
                :
                <p>noimage</p>)
          })}
        </div>
      )}

    </div>
  )
}
