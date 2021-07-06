import React, { useState } from 'react';
import { IndexBooks } from "../components/IndexBooks"
import TextField from '@material-ui/core/TextField';
import { searchBooks } from "../apis/searchBooks"
import { bookStateProps } from "../interfaces"

export const Search = (props: bookStateProps) => {

  const [word, setWord] = useState<string>("")
  let books = props.books
  const setBooks = props.setBooks


  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
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
        books &&
        <IndexBooks books={books} isRakuten={true} />
      }

    </div >
  )
}
