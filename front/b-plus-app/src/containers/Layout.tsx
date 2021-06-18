import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Reset } from "styled-reset"

import { Footer } from "../components/Footer"
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  color: #fff;
  background-color: #111188;
  font-size: 20px;
  font-weight: bold;
  padding: 0 20px;
`;


const Body = styled.div`
//vh：ビューポート（画面サイズ）の高さに対する割合。100vhは画面の高さと同じ（100%）を表す
//100%は親要素に対して。100vhは画面に対して。
  height: calc(100vh - 60px);
`;

export const Layout: React.FC = ({ children }) => {
  //<> </>はフラグメント。divで全体を囲まないでよくなる
  return (
    <>
      <Reset />
      <GlobalStyle />

      <Wrapper>
        <Header>B +</Header>
        <Body>{children}</Body>
        <Footer />
      </Wrapper>
    </>
  );
};
