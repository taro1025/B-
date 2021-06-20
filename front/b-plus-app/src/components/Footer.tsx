import React from "react"
import styled from "styled-components"
import { NoDecoLink } from "../components/NoDecoLink";

//Material UIs
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Search, Home, Notifications, Book } from '@material-ui/icons';

const BottomNavigationWrapper = styled.footer`
  position: fixed;
  bottom: 0;
`


export const Footer: React.FC = () => {
  //<> </>はフラグメント。divで全体を囲まないでよくなる
  return (

    <BottomNavigationWrapper>
      <BottomNavigation>
        <BottomNavigationAction label="home" icon={<Home />} component={NoDecoLink} to="/" />
        <BottomNavigationAction label="manage" icon={<Book />} component={NoDecoLink} to="/" />
        <BottomNavigationAction label="search" icon={<Search />} component={NoDecoLink} to="/search" />
        <BottomNavigationAction label="notification" icon={<Notifications />} component={NoDecoLink} to="/" />
      </BottomNavigation>
    </BottomNavigationWrapper>



  );
};
