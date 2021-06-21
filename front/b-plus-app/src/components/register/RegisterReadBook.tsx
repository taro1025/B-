import { useState } from "react"
import { DialogContent, Dialog, DialogTitle, DialogActions } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import styled from "styled-components"

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

  const [text, setText] = useState("")
  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={handleCloseDialog}
    >


      <DialogTitle>
        <CloseButton onClick={() => handleCloseDialog()}>←</CloseButton>本の感想
      </DialogTitle>
      <form>
        <DialogContent>

          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={30}
            cols={35}
            placeholder="感想を書く(任意)"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>


          <button>
            送信
           </button>




        </DialogActions>
      </form>

    </Dialog>
  )
}
