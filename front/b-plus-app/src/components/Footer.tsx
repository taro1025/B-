import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { NoDecoLink } from "../components/NoDecoLink";
import { UserId } from "../App";
import { checkNotice } from "../apis/notification"

//Material UIs
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Search, Home, Notifications, Book, NotificationsActive } from '@material-ui/icons';

const BottomNavigationWrapper = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
`

const BN = styled(BottomNavigation)`
  justify-content: initial;
`


export const Footer: React.FC = () => {
  const userId: number | undefined = useContext(UserId)
  console.log("fotter", userId)

  const [isNotice, setIsNotice] = useState<boolean>(false)

  useEffect(() => {
    checkNotice()
      .then(res => setIsNotice(res.isNotice))
      .catch(e => console.log(e))
  }, [])
  return (

    <BottomNavigationWrapper>
      <BottomNavigation>
        <BottomNavigationAction label="home" icon={<Home />} component={NoDecoLink} to="/" />
        <BottomNavigationAction
          label="manage"
          icon={<Book />}
          component={NoDecoLink} to={userId ? `/book_manager/${userId}` : "/login"} />
        <BottomNavigationAction label="search" icon={<Search />} component={NoDecoLink} to="/search" />
        {
          isNotice ?
            <BottomNavigationAction label="notification" icon={<NotificationsActive />} component={NoDecoLink} to="/notification" />
            :
            <BottomNavigationAction label="notification" icon={<Notifications />} component={NoDecoLink} to="/notification" />
        }
      </BottomNavigation>
    </BottomNavigationWrapper>



  );
};
