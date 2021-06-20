import styled from "styled-components"
import { NoDecoLink } from "./NoDecoLink";

const DonutWrapper = styled.div`
  position: relative;
  width: 300px; height: 300px;
  border-radius: 100%;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;

    width: 70%; height: 70%;
    border-radius: 100%;
    box-sizing: border-box;

    transform: translate(-50%,-50%);
    z-index: 999;
  }
`;

const DonutLink = styled(NoDecoLink)`
  position: absolute;
  top: 0; left: 0;

  width: 50%; height: 50%;
  border-radius: 100% 0 0 0;

  overflow: hidden;
  transform-origin: right bottom;
  &:nth-of-type(1){
    /*　背景色 リンク幅に応じて調整が必要　*/
    background:
      radial-gradient(circle at 100% 100%, transparent 50%, dodgerblue 50%);

    transform:  rotate(45deg);
    }
  &:nth-of-type(2){
    background:
    radial-gradient(circle at 100% 100%, transparent 50%, crimson 50%);

    transform: rotate(135deg);
  }
  &:nth-of-type(3){
    background:
      radial-gradient(circle at 100% 100%, transparent 50%, yellowgreen 50%);

    transform: rotate(225deg);
  }
  //区切り
  &:before{
    content: '';
    position: absolute;
    bottom: 0; left: 0;

    /* リンク幅に応じて調整が必要 */
    width: 29%; height: 29%;
    border-bottom: 2px solid;
    box-sizing: border-box;
  }
}
`

const DonutWord = styled.span`

  position: absolute;
  top: 50%; left: 50%;

  display: inline-block;
  font-size: 1.25em;
  width: 1em; height: 1em;
  color: #FFF;

  transform: translate(-50%,-50%) rotate(-45deg);


/* リンクテキスト */
&:before{
  content: attr(data-text);
  position: absolute;
  left: 50%;

  display: inline-block;
  height: 100px;

  font-size: 1em;
  line-height: 1;

  transform-origin: center bottom;
}

/* 文字を円に沿って配置 */
&:nth-of-type(1):before{ transform: translate(-50%,-20%) rotate(-20deg); }
&:nth-of-type(2):before{ transform: translate(-50%,-20%) rotate(-5deg); }
&:nth-of-type(3):before{ transform: translate(-50%,-20%) rotate(+10deg); }
`

export const DonutButton = () => {
  return (
    < DonutWrapper>
      <DonutLink to="">
        <DonutWord data-text="ド"></DonutWord>
        <DonutWord data-text="ー"></DonutWord>
        <DonutWord data-text="ナ"></DonutWord>
        <DonutWord data-text="ツ"></DonutWord>
      </DonutLink>
      <DonutLink to="">
        <DonutWord data-text="ド"></DonutWord>
        <DonutWord data-text="ー"></DonutWord>
        <DonutWord data-text="ナ"></DonutWord>
        <DonutWord data-text="ツ"></DonutWord>
      </DonutLink>
      <DonutLink to="">
        <DonutWord data-text="ド"></DonutWord>
        <DonutWord data-text="ー"></DonutWord>
        <DonutWord data-text="ナ"></DonutWord>
        <DonutWord data-text="ツ"></DonutWord>
      </DonutLink>
    </DonutWrapper >

  );
};
