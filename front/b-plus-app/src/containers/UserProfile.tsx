import { getUserProfile } from "../apis/getUserProfile"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import cat from "../cat.jpeg"
import styled from "styled-components"
import { BookManager } from "./BookManager"
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

interface ShowUserInterface {
  user: {
    name: string;
    biograpy?: string;
  }
}

export const UserProfile = () => {
  const params = useParams<{ id: string }>()
  const [user, setUser] = useState<ShowUserInterface>();

  //useEffect(() => {
  //  getUserProfile(params.id)
  //    .then((res) => {
  //      setUser(res.user)
  //    })
  //})
  return (
    <>
      <div>
        <ProfileImg src={cat} />
        <ProfileSpan>倫太郎</ProfileSpan>
      </div>
    </>
  );
}
