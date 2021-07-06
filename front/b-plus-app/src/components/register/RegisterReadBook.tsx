import { useState, useContext } from "react"
import { User } from "../../App"
import { Isbn } from "../detailTabs/Detail"
import { registerReadBook } from "../../apis/bookUserRead"
import { createPost } from "../../apis/posts"
import { createRank } from "../../apis/rank"
import { getBooks } from "../../apis/getBooks"

import { DialogContent, Dialog, DialogTitle, DialogActions } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from "styled-components"
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '3.5rem',
      height: '1.5rem'
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

const DialogTitleColored = styled(DialogTitle)`
  color: white;
  background-color: #065fe3;
`

const PageWrapper = styled.div`
  padding-top: 2rem;
`

const PageSpan = styled.span`
  line-height: 1.5rem;s
`

export const RegisterReadBook = (
  props: {
    setReadBookDialog: React.Dispatch<React.SetStateAction<boolean>>
    isReadBookDialog: true
  }
) => {
  const classes = useStyles();

  //ダイアログ
  const setDialog = props.setReadBookDialog
  const isOpen = props.isReadBookDialog
  const handleCloseDialog = () => {
    setDialog(false)
  }


  //登録するためのやつ
  const contextUser: any = useContext(User)
  const contextIsbn: any = useContext(Isbn)

  const handleReadBook = async () => {
    if (contextUser.user && contextIsbn) {
      let url: { large: string, medium: string } = { large: "", medium: "" }
      await getBooks(contextIsbn)
        .then(res => {
          console.log(res)
          url.large = res.Items[0].Item.largeImageUrl
          url.medium = res.Items[0].Item.mediumImageUrl
        })
      await registerReadBook(contextIsbn, contextUser.user.id, Number(state.page))
        .then(res => {
          createPost(state.text, contextIsbn)
          createRank(
            contextUser.user.id,
            state.rank,
            contextIsbn,
            url.large,
            url.medium
          )
        })
      handleCloseDialog()

    } else {
      console.log("ログインが必要")
    }
  }


  interface PostI {
    text: string;
    page?: string | undefined;
    rank?: any;
  }
  const [state, setState] = useState<PostI>({ text: "" })
  const checkText = (targetValue: string) => {
    if (targetValue.length > 220) {
      return
    }
    setState({ ...state, text: targetValue })
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

          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={15}
            cols={45}
            placeholder="感想を書く(任意)"
            value={state.text}
            onChange={e => checkText(e.target.value)}
          />
          <p>{state.text.length}/220</p>
          <PageWrapper>
            <PageSpan>ページ数(任意)：</PageSpan>
            <TextField
              className={classes.root}
              id="outlined-basic" label="" variant="outlined"
              onChange={e => setState({ ...state, page: e.target.value })}
            />
          </PageWrapper>

          <PageWrapper>
            <PageSpan>評価(任意)：</PageSpan>

            <FormControl variant="outlined" className={classes.root}>
              <Select
                native
                value={state.rank}
                onChange={e => setState({ ...state, rank: e.target.value })}
              >
                <option aria-label="None" value={0} />
                <option value={5}>S</option>
                <option value={4}>A</option>
                <option value={3}>B</option>
                <option value={2}>C</option>
                <option value={1}>D</option>
              </Select>
            </FormControl>
          </PageWrapper>

          <DialogActions>

            <Button
              variant="contained"
              color="primary"
              onClick={() => handleReadBook()}
            >投稿</Button>

          </DialogActions>
        </DialogContent>

      </form>

    </Dialog>
  )
}
