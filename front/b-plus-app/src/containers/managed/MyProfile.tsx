import { useContext, useState } from "react"
import { User } from "../../App"
import TextField from '@material-ui/core/TextField';

export const MyProfile = () => {
  const context: any = useContext(User)
  const user: any = context.user

  const [name, setName] = useState<string>(user.name)
  return (
    <>
      {
        user &&
        <TextField
          id="standard-search"
          label="名前"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      }
    </>
  )
}
