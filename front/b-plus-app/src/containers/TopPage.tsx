import { NoDecoLink } from "../components/NoDecoLink";

import { logout } from "../apis/logout"


interface Props {
  user: {
    name: string;
    id: number;
  };

}
export const TopPage = (props: Props) => {

  const userId = props.user.id
  const userName = props.user.name
  const handleClickLogout = (user_id: number): void => {
    logout(user_id)
  }

  return (
    <div className="App">
      {
        userName && <p>{userName}</p>
      }
      <h1><NoDecoLink to={'/login'}>ログイン</NoDecoLink></h1>
      <h1><NoDecoLink to={'/'} onClick={() => handleClickLogout(userId)}> ログアウト</NoDecoLink></h1>
    </div>
  )
}
//onClick={() => handleClickLogout()
