import { getUserProfile } from "../apis/getUserProfile"
import { useEffect, useState, useContext } from "react"
import { User } from "../App"
import { useParams } from "react-router-dom"
import cat from "../cat.jpeg"
import styled from "styled-components"
import { BookManager } from "./BookManager"
import { follow, unfollow } from "../apis/follow"
import { UserId } from "../App"
import Button from '@material-ui/core/Button';
import { isFollow } from "../apis/isFollow"

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

  name: string;
  biography?: string;
  image?: {
    url: string;
  }

}

export const UserProfile = () => {
  const params = useParams<{ id: string }>() //このIDはページに表示されてるユーザーのID

  const context: any = useContext(User)
  const user: any = context.user

  const [followButton, setFollowButton] = useState<true | false>()
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

  useEffect(() => {
    if (user) {
      isFollow(params.id, String(user.id))
        .then(res => setFollowButton(res.isFollow))
        .catch(e => console.log(e))
    }
  })

  return (
    <>
      <ProfileWrapper>
        <ProfileImg src={user ? user.image && user.image.url : cat} />
        <ProfileSpan>倫太郎</ProfileSpan>
        {
          user &&
          user.id != Number(params.id) && (
            followButton ?
              <Button variant="contained" color="primary" onClick={() => handleUnfollow()}>
                フォローしています
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
        isProfile={false}
      />
    </>
  );
}
