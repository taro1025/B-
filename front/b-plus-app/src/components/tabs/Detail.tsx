import styled from "styled-components"
import React, { useState } from "react"
import { useParams } from 'react-router-dom'
import packagelock from "../../package-lock.jpeg"
import { DonutButton } from "../DonutButton"


const ImageWrapper = styled.div`
  padding: 1rem 0;
  text-align: center;
`
export const Isbn = React.createContext({})

export const Detail = () => {


  const params = useParams<{ id: string }>()

  return (
    <>
      <ImageWrapper><img src={packagelock}></img></ImageWrapper>
      <div>
        <h2>プロテスタンティズムの倫理と資本主義の精神</h2>
      </div>
      <Isbn.Provider value={params.id}>
        <DonutButton isbn={params.id}></DonutButton>
      </Isbn.Provider>
    </>
  )
}
