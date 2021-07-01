import React, { useContext, useState } from "react"

import { User } from "../../App"

import { registerFavoriteBook } from "../../apis/bookUserFavorite"
import Button from '@material-ui/core/Button';
import { ShareFavorite } from "../ShareFavorite"


export const RegisterFavoriteBook = (props: {
  setFavoriteBookDialog: React.Dispatch<React.SetStateAction<boolean>>
  isFavoriteBookDialog: true,
  book: any
}) => {

  //ダイアログ
  const setDialog = props.setFavoriteBookDialog
  const isOpen = props.isFavoriteBookDialog
  const handleCloseDialog = () => {
    setDialog(false)
  }

  //登録するためのやつ
  const contextUser: any = useContext(User)

  interface FavoriteI {
    summary: string;
    description: string;
  }
  const [state, setState] = useState<FavoriteI>({ summary: "", description: "" })



  const handleFavoriteBook = () => {
    if (contextUser.user) {
      registerFavoriteBook(
        props.book.isbn, contextUser.user.id,
        state.summary, state.description,
        props.book.mediumImageUrl, props.book.largeImageUrl
      )
    }
  }

  return (
    <ShareFavorite
      isOpen={isOpen}
      onClose={handleCloseDialog}
      state={state}
      setState={setState}

    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleFavoriteBook()}
      >追加</Button>
    </ShareFavorite>

  )
}
