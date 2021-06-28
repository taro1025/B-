import { BookProps } from "../../interfaces"
import { dummyBookUserFavorite } from "../../dummyData"
import dummyImage from "../../dummyImage.jpeg"
import styled from "styled-components"
import { NoDecoLink } from "../../components/NoDecoLink";
import { useState } from "react"
import { FavoriteDialog } from "./favoriteComponent/FavoriteDialog"

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

  return (
    <>

      {
        dummyBookUserFavorite &&
        dummyBookUserFavorite.map((book, i) => {
          return <button id={String(i)} onClick={() => handleOpenDialog(i)}><BookImage src={dummyImage} /></button>
        })
      }


      {
        isNumber.number != undefined &&
        <FavoriteDialog
          description={dummyBookUserFavorite[isNumber.number].description}
          setDialogNumber={setDialogNumber}
        />
      }
    </>
  )
}
