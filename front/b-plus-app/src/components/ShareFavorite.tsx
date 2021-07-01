import { DialogContent, Dialog, DialogTitle, DialogActions } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button, { ButtonProps } from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles';
//import { ButtonProps } from 'material-ui/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '88vw',
    },
  },
}));

const DialogTitleColored = styled(DialogTitle)`
  color: white;
  background-color: #065fe3;
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

const PageWrapper = styled.div`
  padding-bottom: 2rem;
`

const Tes = styled(TextareaAutosize)`
  width: 87.2vw;
`
interface FavoriteI {
  summary: string;
  description: string;
}

export const ShareFavorite = (props: {
  isOpen: boolean;
  onClose: () => void,
  state: FavoriteI,
  setState: (value: React.SetStateAction<FavoriteI>) => void,
  children: React.ReactNode
}) => {

  const classes = useStyles();

  const checkText = (targetValue: string) => {
    if (targetValue.length > 1200) {
      return
    }
    props.setState({ ...props.state, description: targetValue })
  }

  return (
    <Dialog
      fullScreen
      open={props.isOpen}
      onClose={props.onClose}
    >


      <DialogTitleColored>
        <CloseButton onClick={() => props.onClose()}>←</CloseButton>人生の本
      </DialogTitleColored>
      <form>
        <DialogContent>
          <PageWrapper>
            <TextField
              className={classes.root}
              id="outlined-basic" label="" variant="outlined"
              placeholder="タイトル(任意)"
              value={props.state.summary}
              onChange={e => props.setState({ ...props.state, summary: e.target.value })}
            />
          </PageWrapper>
          <Tes
            aria-label="minimum height"
            rowsMin={15}
            placeholder="思い入れ等(任意)"
            value={props.state.description}
            onChange={e => checkText(e.target.value)}
          />

          <DialogActions>

            {props.children}

          </DialogActions>
        </DialogContent>

      </form>

    </Dialog>
  )
}
