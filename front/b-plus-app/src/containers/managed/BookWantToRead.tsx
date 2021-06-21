import { useEffect, useContext, useState } from "react"
import { User } from "../../App"
import { fetchBookWantToRead } from "../../apis/fetchBookWantToRead"

export const BookWantToRead = () => {

  const [books, setBooks] = useState<any>()

  const context: any = useContext(User)

  //res.booksは本のisbnが複数入ってる。本当はこれを使ってAmazonAPIで本の情報を取得したい。
  useEffect(() => {
    fetchBookWantToRead(context.user.id)
      .then(res => {
        console.log("response", res.books)
        setBooks(res.books)
      })
  }, [])

  return (
    <div>
      <p>読見たい本のページ</p>
      {
        books &&

        books!.map((item: any) => {
          console.log("アイテム", item)
          return <p>{item.book_isbn}</p>
        })
      }
    </div>
  )
}
