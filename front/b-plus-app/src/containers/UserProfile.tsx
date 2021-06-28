import { getUserProfile } from "../apis/getUserProfile"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import cat from "../cat.jpeg"
import styled from "styled-components"
import { BookManager } from "./BookManager"
import { follow, unfollow } from "../apis/follow"
import { useContext } from "react"
import { UserId } from "../App"
import Button from '@material-ui/core/Button';

const ProfileWrapper = styled.div`
  padding-bottom: 1rem;
`

const ProfileImg = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 100%;
  float: left;
`

const ProfileSpan = styled.span`
  height: 4rem;
  line-height: 4rem;
  padding-left: .8rem;
  font-weight: bold;
`

const Biography = styled.p`
  padding: .8rem .8rem;
  line-height: 1.5rem;
`

interface ShowUserInterface {
  user: {
    name: string;
    biography?: string;
  }
}

export const UserProfile = () => {
  const params = useParams<{ id: string }>()
  const myId = useContext(UserId)
  const [user, setUser] = useState<ShowUserInterface>();
  const [isFollow, setFollowButton] = useState<true | false>(false)
  const handleFollow = () => {
    follow(params.id)
      .then((res) => {
        setFollowButton(true)
      })
  }
  const handleUnfollow = () => {
    unfollow(params.id)
      .then((res) => {
        setFollowButton(false)
      })
  }

  //useEffect(() => {
  //  getUserProfile(params.id)
  //    .then((res) => {
  //      setUser(res.user)
  //    })
  //})
  return (
    <>
      <ProfileWrapper>
        <ProfileImg src={cat} />
        <ProfileSpan>倫太郎</ProfileSpan>
        {
          myId != Number(params.id) && (
            isFollow ?
              <Button variant="contained" color="primary" onClick={() => handleUnfollow()}>
                フォローしました
            </Button>
              :
              <Button variant="outlined" color="primary" onClick={() => handleFollow()}>
                フォロー
            </Button>
          )
        }
        <Biography>プロフィール見ていただきありがとうございます！私は現在無職童貞の21歳です。アンチには拳で抵抗するで。</Biography>
      </ProfileWrapper>
      <BookManager
        log={3}
        readBook={0}
        favoriteBook={1}
        bookWantToRead={2}
      />
    </>
  );
}
