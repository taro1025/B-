import React from "react"
import { bookStateProps } from "../interfaces"
import { useParams } from 'react-router-dom'
import packagelock from "../package-lock.jpeg"
import { DonutButton } from "../components/DonutButton"
import styled from "styled-components"

//　メ　モ
//reloadするとstateの値が消えてしまうのでエラーになる
//そこを余裕が出た時localstrageとか使って改善したい

const ImageWrapper = styled.div`
  padding: 1rem 0;
  text-align: center;
`
const Image = styled.img`

`
export const Isbn = React.createContext({})

export const DetailBook = (props: bookStateProps) => {
  const params = useParams<{ id: string }>()
  //const book = props.books[params.id]

  return (
    <div>
      <ImageWrapper><img src={packagelock}></img></ImageWrapper>
      <div>
        <h2>プロテスタンティズムの倫理と資本主義の精神</h2>
      </div>
      <Isbn.Provider value={params.id}>
        <DonutButton isbn={params.id}></DonutButton>
      </Isbn.Provider>

    </div>

  )
}
