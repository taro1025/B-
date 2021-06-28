import styled from "styled-components"
import { DialogContent, DialogTitle, DialogActions } from '@material-ui/core';
import dummyImage from "../../../dummyImage.jpeg"

const Dialog = styled.div`
  position: absolute;
  background-color: white;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999999999;
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
  descriptionSummary?: string;
  description?: string;
  setDialogNumber: React.Dispatch<React.SetStateAction<State>>;
}

export const FavoriteDialog = (props: Props) => {

  return (
    <>
      <Dialog>


        <DialogTitleColored>
          <CloseButton onClick={() => props.setDialogNumber({ number: undefined })}>←</CloseButton>
        人生の本
      </DialogTitleColored>

        <DialogContent>
          <SummaryWrapper>
            <Summary>{props.descriptionSummary}</Summary>
          </SummaryWrapper>
          <div>{props.description}</div>
          <ImageWrapper><BookImage src={dummyImage} /></ImageWrapper>
        </DialogContent>



      </Dialog>
    </>
  );
};
