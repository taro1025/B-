import CircularProgress from '@material-ui/core/CircularProgress';
import styled from "styled-components"

const ProgressWrapper = styled.div`
  width: 100vw;
  padding-top: 2rem;
  text-align: center;
`


const Label = styled.span`
  padding-top: .6rem;
  display: block;
  font-size: .8rem;
  padding-left: .6rem;
`

export const Loading = () => {
  return (
    <ProgressWrapper>
      <CircularProgress />
      <Label>Loading...</Label>
    </ProgressWrapper>
  )
}
