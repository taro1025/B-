import React, { useContext, useState } from "react"
import styled from "styled-components"

import { User } from "../../App"
import { Isbn } from "../detailTabs/Detail"

import { registerFavoriteBook } from "../../apis/bookUserFavorite"

import { DialogContent, Dialog, DialogTitle, DialogActions } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '88vw',
    },
  },
}));

const CloseButton = styled.button`
  font-size: 1.2rem;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  appearance: none;
  margin-right: 1rem;
  color: white;
`

const Tes = styled(TextareaAutosize)`
  width: 87.2vw;
`

const DialogTitleColored = styled(DialogTitle)`
  color: white;
  background-color: #065fe3;
`

const PageWrapper = styled.div`
  padding-bottom: 2rem;
`

const PageSpan = styled.span`
  line-height: 1.5rem;s
`

export const RegisterFavoriteBook = (props: {
  setFavoriteBookDialog: React.Dispatch<React.SetStateAction<boolean>>
  isFavoriteBookDialog: true,
  book: any
}) => {
  const classes = useStyles();

  //ダイアログ
  const setDialog = props.setFavoriteBookDialog
  const isOpen = props.isFavoriteBookDialog
  const handleCloseDialog = () => {
    setDialog(false)
  }

  //登録するためのやつ
  const contextUser: any = useContext(User)
  const contextIsbn: any = useContext(Isbn)

  interface FavoriteI {
    summary: string;
    description: string;
  }
  const [state, setState] = useState<FavoriteI>({ summary: "", description: "" })

  const checkText = (targetValue: string) => {
    if (targetValue.length > 1200) {
      return
    }
    setState({ ...state, description: targetValue })
  }

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
    <Dialog
      fullScreen
      open={isOpen}
      onClose={handleCloseDialog}
    >


      <DialogTitleColored>
        <CloseButton onClick={() => handleCloseDialog()}>←</CloseButton>本の感想
      </DialogTitleColored>
      <form>
        <DialogContent>
          <PageWrapper>
            <TextField
              className={classes.root}
              id="outlined-basic" label="" variant="outlined"
              placeholder="タイトル(任意)"
              onChange={e => setState({ ...state, summary: e.target.value })}
            />
          </PageWrapper>
          <Tes
            aria-label="minimum height"
            rowsMin={15}
            placeholder="思い入れ等(任意)"
            value={state.description}
            onChange={e => checkText(e.target.value)}
          />

          <DialogActions>

            <Button
              variant="contained"
              color="primary"
              onClick={() => handleFavoriteBook()}
            >追加</Button>

          </DialogActions>
        </DialogContent>

      </form>

    </Dialog>
  )
}
