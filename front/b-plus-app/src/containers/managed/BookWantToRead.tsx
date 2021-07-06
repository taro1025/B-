import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchBookWantToRead } from "../../apis/bookWantToRead";
import { IndexBooks } from "../../components/IndexBooks";



//ダミーデータを使用のためコメントアウトしてる
export const BookWantToRead = () => {

  const [books, setBooks] = useState<any>()

  const params: any = useParams()


  //res.booksは本のisbnが複数入ってる。本当はさらにこれを使ってAmazonAPIで本の情報を取得したい。
  useEffect(() => {
    if (params.id) {
      fetchBookWantToRead(params.id)
        .then(res => {
          console.log("response", res.books)
          setBooks(res.books)
        })
    }
  }, [])

  return (
    <IndexBooks books={books} isRakuten={false} />
  )
}
