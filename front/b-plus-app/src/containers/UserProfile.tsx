import { useEffect, useState, useContext } from "react"
import { User } from "../App"
import { useParams } from "react-router-dom"
import cat from "../cat.jpeg"
import styled from "styled-components"
import { BookManager } from "./BookManager"
import { follow, unfollow } from "../apis/follow"
import Button from '@material-ui/core/Button';
import { isFollow } from "../apis/follow"
import { showUser } from "../apis/user"

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
  const currentUser: any = context.user

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

  const [user, setUser] = useState<any>()

  useEffect(() => {
    if (currentUser) {
      isFollow(params.id, String(currentUser.id))
        .then(res => {
          console.log("res", res)
          setFollowButton(res.isFollow)
        })
        .catch(e => console.log(e))
      showUser(params.id)
        .then(res => {
          setUser(res.user)
        })
        .catch(e => console.log(e))
    }
  }, [])

  return (
    <>
      {
        user &&
        <>
          <ProfileWrapper>
            <ProfileImg src={user ? user.image && user.image.url : cat} />
            <ProfileSpan>{user.name}</ProfileSpan>
            {

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
            <Biography>{user.description && user.description}</Biography>
          </ProfileWrapper>
          <BookManager
            log={3}
            readBook={0}
            favoriteBook={1}
            bookWantToRead={2}
            isProfile={false}
          />
        </>
      }

    </>
  );
}
