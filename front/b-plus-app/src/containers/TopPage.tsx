import { NoDecoLink } from "../components/NoDecoLink";
import { logout } from "../apis/session"
import { IState, postI, commentAndUserI, RankProps, userI } from '../interfaces'
import { graphQL } from "../apis/graphQL/client"
import { getTimeline } from "../apis/graphQL/post"
import { useEffect, useState } from "react";
import { Posts } from "../components/detailTabs/Posts"
import { Loading } from "../components/Loading"

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
    if (userId) {
      //ログイン中のユーザーのタイムライン（ポストの集まり)を取得
      graphQL(getTimeline)
        .then((res: any) => {
          setTimeline(res.timeline)

          console.log("トップのレス", res)
        })
        .catch((e: any) => console.log(e))
    }
  }, [])

  return (
    <div>
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
        timeline ?
          <Posts
            posts={timeline}
            setComments={setTimeline}
          />
          :
          <Loading />
      }

    </div>
  )
}
