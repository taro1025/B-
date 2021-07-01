import styled from "styled-components"

const Italic = styled.span`
  font-style: italic;
`

export const Rank = (props: { rank?: number }) => {
  return (
    <>
      {
        props.rank == 5 &&
        <Italic>S</Italic>
      }
      {
        props.rank == 4 &&
        <Italic>A</Italic>
      }
      {
        props.rank === 3 &&
        <Italic>B</Italic>
      }
      {
        props.rank === 2 &&
        <Italic>C</Italic>
      }
      {
        props.rank === 1 &&
        <Italic>D</Italic>
      }
    </>
  )
};
