import { BookProps } from "../../interfaces"
import { fetchBookUserFavorite } from "../../apis/bookUserFavorite"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { FavoriteDialog } from "./favoriteComponent/FavoriteDialog"
import styled from "styled-components"


const BookImage = styled.img`
  height: 4.2rem;
  padding-left: .6rem;
`
interface State {
  number?: number;
}

export const BookUserFavorite = (props: { posts?: Array<BookProps> }) => {

  const [isNumber, setDialogNumber] = useState<State>({})

  const handleOpenDialog = (favoriteId: number) => {
    setDialogNumber({ number: favoriteId })
  }

  const [favoriteBooks, setFavoriteBooks] = useState<any>()
  const params: any = useParams()
  useEffect(() => {
    if (params.id) {
      fetchBookUserFavorite(params.id)
        .then(res => setFavoriteBooks(res.books))
        .catch(e => console.log(e))
    }
  }, [])


  return (
    <>

      {
        favoriteBooks &&
        favoriteBooks.map((book: any, i: number) => {
          return <button onClick={() => handleOpenDialog(i)}><BookImage src={book.url} /></button>
        })
      }


      {
        isNumber.number != undefined &&
        <FavoriteDialog
          favoriteId={favoriteBooks[isNumber.number].id}
          descriptionSummary={favoriteBooks[isNumber.number].description_summary}
          description={favoriteBooks[isNumber.number].description}
          setDialogNumber={setDialogNumber}
        />
      }
    </>
  )
}
