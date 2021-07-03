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

const Title = styled.h2`
  text-align: center;
  font-size: .7rem;
`
export const Isbn = React.createContext({})

export const Detail = () => {


  const params = useParams<{ id: string }>()

  const [book, setBook] = useState<any>()

  useEffect(() => {
    getBooks(params.id)
      .then((res) => {
        console.log("res", res)
        setBook(res.Items[0].Item)
      })
  }, [])
  return (
    <>
      {//<ImageWrapper><img src={packagelock}></img></ImageWrapper>
      }
      <ImageWrapper><img src={book && book!.largeImageUrl}></img></ImageWrapper>
      <div>
        <Title>{book && book!.title}</Title>
      </div>
      <Isbn.Provider value={params.id}>
        <DonutButton book={book}></DonutButton>
      </Isbn.Provider>
    </>
  )
}
