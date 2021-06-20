import { useEffect } from "react"
import { bookStateProps } from "../interfaces"
import { useParams } from 'react-router-dom'

//reloadするとstateの値が消えてしまうのでエラーになる
//そこを余裕が出た時localstrageとか使って改善したい
export const DetailBook = (props: bookStateProps) => {
  const params = useParams<{ id: string }>()
  const book = props.books[params.id]
  console.log("本", book[params.id])
  return (
    <div className="App">
      <p>{book.volumeInfo.title}</p>
    </div>
  )
}
