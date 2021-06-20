import { NoDecoLink } from "../components/NoDecoLink";

import { logout } from "../apis/logout"
import { IState } from '../interfaces'


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


    </div>
  )
}
