import { useState } from "react"
import { DialogContent, Dialog, DialogTitle, DialogActions } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import styled from "styled-components"
import { useContext } from 'react'
import { User } from "../../App"
import { Isbn } from "../../containers/DetailBook"
import { registerReadBook } from "../../apis/registerReadBook"


const OverWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vh;
  border: solid 2px red;
  z-index: 9999999;
`

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

export const RegisterReadBook = (
  props: {
    setReadBookDialog: React.Dispatch<React.SetStateAction<boolean>>
    isReadBookDialog: true
  }
) => {

  const setDialog = props.setReadBookDialog
  const isOpen = props.isReadBookDialog
  const handleCloseDialog = () => {
    setDialog(false)
  }

  const contextUser: any = useContext(User)
  const contextIsbn: any = useContext(Isbn)
  const handleReadBook = () => {
    if (contextUser.user) {
      registerReadBook(contextIsbn.isbn, contextUser.user.id)
    } else {
      console.log("ログインが必要")
    }
  }

  const [text, setText] = useState("")
  const checkText = (targetValue: string) => {
    if (targetValue.length > 220) {
      return
    }
    setText(targetValue)
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
            value={text}
            onChange={e => checkText(e.target.value)}
          />
          <p>{text.length}/220</p>
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
