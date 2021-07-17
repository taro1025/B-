import { NoDecoLink } from "../components/NoDecoLink";
import { logout } from "../apis/session"
import { IState, postI, commentAndUserI, RankProps, userI } from '../interfaces'
import { getTimeline } from "../apis/graphQL/post"
import { useEffect, useState } from "react";
import { Posts } from "../components/detailTabs/Posts"
import { allUser } from "../apis/graphQL/user"


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

  const [timeline, setTimeline] = useState<postI[]>()

  useEffect(() => {
    allUser(`
    query {
      users {
        name
        id
      }
    }

    `)
    if (userId) {
      getTimeline(`
      {
        timeline{
          id
          impression
          user{
            name
            id
            image
          }
          rank{
            rank
            mediumUrl
          }
          comments{
            user{
              name
              id
              image
            }
            comment
          }
        }
      }
      `)
        .then((res) => {
          setTimeline(res.timeline)

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

        />
      }


    </div>
  )
}
