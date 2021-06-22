import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from 'styled-components';
import dummyImage from "../dummyImage.jpeg"
import { NoDecoLink } from "./NoDecoLink";

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

`
const Li = styled.li`
  flex-basis: 33.3%;
`

const Img = styled.img`
  width: 100%;
  border: 1px solid #fff;
`

const JumpWrapper = styled.div`
  position: fixed;
  top: 110px;
  left: 0.1rem;
`
const JumpBar = styled.div`
  width: .7rem;
  height: 500px;
  background-color: #333333;
  border-radius: 10px;
  opacity: 0.7;
  position: absolute;
  top:0;
  left: .25rem;

`
const RankWrapper = styled.div`
  position: relative;
  height: 500px;
  top:0;
  left: 0;
  display:flex;
  flex-flow: column;
  justify-content:space-between;
  z-index: 99

`

const Anchor = styled(AnchorLink)`
  width: 1.3rem;
  height: 1.3rem;
  background-color: #111188;
  border-radius: 100%;
  text-align: center;

  text-decoration: none;
  :active {
    color: #000000;
  }
  :focus {
    outline: none;
  }

`

const CircleSpan = styled.span`
  opacity: initial;
  width: 100%;
  height: 100%;
  color: white;

`



//実際には、ランクごとに本を取得して表示させる。

export const Hierarchy = () => {
  const dummy_books: any = []
  for (let i = 0; i < 20; i++) {
    dummy_books.push(
      <Li><NoDecoLink to={`/book/9999999`}><Img src={dummyImage} /></NoDecoLink></Li>
    )
  }
  return (
    <>
      <JumpWrapper>
        <RankWrapper>
          <Anchor href="#s"><CircleSpan>S</CircleSpan></Anchor>
          <Anchor href="#a"><CircleSpan>A</CircleSpan></Anchor>
          <Anchor href="#b"><CircleSpan>B</CircleSpan></Anchor>
          <Anchor href="#c"><CircleSpan>C</CircleSpan></Anchor>
          <Anchor href="#d"><CircleSpan>D</CircleSpan></Anchor>
        </RankWrapper>
        <JumpBar />
      </JumpWrapper>

      <p>Sだお</p>
      <section id="s">
        <Ul>

          {
            dummy_books.map((book: any) => {
              return book
            })
          }
        </Ul>
      </section>
              Aだお
      <section id="a">
        <Ul>

          {
            dummy_books.map((book: any) => {
              return book
            })
          }
        </Ul>
      </section>
              Bだお
      <section id="b">
        <Ul>

          {
            dummy_books.map((book: any) => {
              return book
            })
          }
        </Ul>
      </section>
              Cだお
      <section id="c">
        <Ul>

          {
            dummy_books.map((book: any) => {
              return book
            })
          }
        </Ul>
      </section>
      <section id="d">
        <Ul>

          {
            dummy_books.map((book: any) => {
              return book
            })
          }
        </Ul>
      </section>

    </>
  )
}
