import { NoDecoLink } from "../components/NoDecoLink";

import { logout } from "../apis/session"
import { IState } from '../interfaces'
import { getTimeline } from "../apis/getTimeline"
import { useEffect, useState } from "react";
import { Posts } from "../components/detailTabs/Posts"

interface Props {
  user: {
    name: string;
    id: number;
  };
}

export const TopPage = (props: { user: IState | undefined }) => {
  let userId: number | undefined
  let userName: string | undefined
  if (typeof props.user === 'undefined') {
    userId = undefined
    userName = undefined
  } else {
    userId = props.user.id
    userName = props.user.name
  }
  const handleClickLogout = (user_id: number): void => {
    logout(user_id)
  }

  const [timeline, setTimeline] = useState<[] | undefined>()
  const [comments, setComments] = useState<any>()
  const [ranks, setRanks] = useState<any>()
  const [users, setUsers] = useState<any>()
  useEffect(() => {
    if (userId) {
      getTimeline()
        .then((res) => {
          setTimeline(res.timeline)
          setComments(res.comments)
          setRanks(res.ranks)
          setUsers(res.users)
          console.log("トップのレス", res)
        })
        .catch((e) => console.log(e))
    }
  }, [])

  return (
    <div className="App">
      {
        userName && <p>{userName}</p>
      }
      <h1><NoDecoLink to={'/login'}>ログイン</NoDecoLink></h1>
      {
        typeof userId === 'undefined' ?
          <h1><NoDecoLink to={'/'} > ログアウト</NoDecoLink></h1>
          :
          <h1><NoDecoLink to={'/'} onClick={() => handleClickLogout(userId!)}> ログアウト</NoDecoLink></h1>
      }

      {
        timeline &&
        <Posts
          posts={timeline}
          comments={comments && comments}
          ranks={ranks && ranks}
          users={users}
          setComments={setComments}
        />
      }


    </div>
  )
}
