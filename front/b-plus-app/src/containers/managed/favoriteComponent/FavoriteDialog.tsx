import styled from "styled-components"
import { DialogContent, DialogTitle, DialogActions } from '@material-ui/core';
import dummyImage from "../../../dummyImage.jpeg"
import React from "react"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ShareFavorite } from "../../../components/ShareFavorite"
import { editBookUserFavorite } from "../../../apis/bookUserFavorite"
import Button from '@material-ui/core/Button';

const Dialog = styled.div`
  position: absolute;
  background-color: white;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1300;
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

const RightIconButton = styled(IconButton)`

`
const DialogTitleColored = styled(DialogTitle)`
  color: white;
  background-color: #065fe3;
`

const SummaryWrapper = styled.div`
  padding: 1rem;
`

const Summary = styled.h1`
  font-size: 1.4rem;
`

const ImageWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`

const BookImage = styled.img`
  height: 4.2rem;
  padding-left: .6rem;
`

interface State {
  number?: number;
}


interface Props {
  favoriteId: number,
  descriptionSummary?: string;
  description?: string;
  setDialogNumber: React.Dispatch<React.SetStateAction<State>>;
}

export const FavoriteDialog = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<any>(null);

  const handleClick = (event: any) => {
    console.log("deteruyo", anchorEl)
    setAnchorEl(event.currentTarget);
  };

  const [isEdit, setEdit] = React.useState<boolean>(false)
  const handleClose = () => {
    setAnchorEl(null);
    setEdit(true)
  };

  const handleCloseEdit = () => {
    setEdit(false)
  }

  interface FavoriteI {
    summary: string;
    description: string;
  }
  const [state, setState] = React.useState<FavoriteI>(
    {
      summary: props.descriptionSummary ? props.descriptionSummary : "",
      description: props.description ? props.description : ""
    }
  )

  const handleFavoriteBook = () => {
    editBookUserFavorite(props.favoriteId, state.summary, state.description)
  }

  return (
    <>
      {
        isEdit ?
          <ShareFavorite
            isOpen={isEdit}
            onClose={handleCloseEdit}
            state={state}
            setState={setState}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleFavoriteBook()}
            >編集</Button>
          </ShareFavorite>

          :
          <Dialog>


            <DialogTitleColored>
              <CloseButton onClick={() => props.setDialogNumber({ number: undefined })}>←</CloseButton>
        人生の本
          <RightIconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MoreHorizIcon />
              </RightIconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>編集</MenuItem>
                <MenuItem onClick={handleClose}>削除</MenuItem>
              </Menu>
            </DialogTitleColored>

            <DialogContent>
              <SummaryWrapper>
                <Summary>{props.descriptionSummary}</Summary>
              </SummaryWrapper>
              <div>{props.description}</div>
              <ImageWrapper><BookImage src={dummyImage} /></ImageWrapper>
            </DialogContent>



          </Dialog>
      }

    </>
  );
};
