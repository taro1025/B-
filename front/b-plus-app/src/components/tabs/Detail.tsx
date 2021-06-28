import styled from "styled-components"
import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import packagelock from "../../package-lock.jpeg"
import { DonutButton } from "../DonutButton"
import { getBooks } from "../../apis/getBooks"

const ImageWrapper = styled.div`
  padding: 1rem 0;
  text-align: center;
`
export const Isbn = React.createContext({})

export const Detail = () => {


  const params = useParams<{ id: string }>()

  const [book, setBook] = useState<any>()

  useEffect(() => {
    getBooks(params.id)
      .then((res) => {
        setBook(res.Items[0].Item)
        console.log(book)
      })
  }, [])
  return (
    <>
      {//<ImageWrapper><img src={packagelock}></img></ImageWrapper>
      }
      <ImageWrapper><img src={book && book!.largeImageUrl}></img></ImageWrapper>
      <div>
        <h2>{book && book!.title}</h2>
      </div>
      <Isbn.Provider value={params.id}>
        <DonutButton isbn={params.id}></DonutButton>
      </Isbn.Provider>
    </>
  )
}
