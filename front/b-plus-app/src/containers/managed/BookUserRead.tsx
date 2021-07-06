import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getIndexBooks } from "../../apis/bookUserRead";
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import SyncIcon from '@material-ui/icons/Sync';
import { Hierarchy } from "../../components/Hierarchy"
import { IndexBooks } from "../../components/IndexBooks"


const MyIconButton = styled(IconButton)`
  padding:initial;
  left: 88vw;
`




export const BookUserRead = () => {


  const [isHierarchy, setHierarchy] = useState(true)
  const [books, setBooks] = useState<any>()

  const handleHierarchy = () => {
    setHierarchy(!isHierarchy)
  }
  const params: any = useParams()


  //res.booksは本のisbnが複数入ってる。本当はさらにこれを使ってAmazonAPIで本の情報を取得したい。
  useEffect(() => {
    if (params.id) {
      getIndexBooks(params.id)
        .then(res => {
          console.log("response", res)
          setBooks(res.booksUserRead)
          console.log("本が入ったか", books)
        })
    }
  }, [])


  return (
    <div>
      <MyIconButton onClick={() => handleHierarchy()} size="small" color="primary" aria-label="add to shopping cart">
        <SyncIcon />
      </MyIconButton>
      {
        isHierarchy ?
          <Hierarchy />
          :
          <IndexBooks books={books} isRakuten={false} />
      }

    </div>
  )
}
