import { useEffect } from "react"
import { bookStateProps } from "../interfaces"
import { useParams } from 'react-router-dom'
import packagelock from "../package-lock.jpeg"
import { DonutButton } from "../components/DonutButton"
//reloadするとstateの値が消えてしまうのでエラーになる
//そこを余裕が出た時localstrageとか使って改善したい
export const DetailBook = (props: bookStateProps) => {
  const params = useParams<{ id: string }>()
  //const book = props.books[params.id]

  return (
    <div>
      <div><img src={packagelock}></img></div>
      <div>
        <h2>プロテスタンティズムの倫理と資本主義の精神</h2>
      </div>
      <DonutButton></DonutButton>
    </div>

  )
}
