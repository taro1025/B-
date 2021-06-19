import React from "react"
import styled from "styled-components"

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
        <BottomNavigationAction label="home" icon={<Home />} />
        <BottomNavigationAction label="manage" icon={<Book />} />
        <BottomNavigationAction label="search" icon={<Search />} />
        <BottomNavigationAction label="notification" icon={<Notifications />} />
      </BottomNavigation>
    </BottomNavigationWrapper>



  );
};
