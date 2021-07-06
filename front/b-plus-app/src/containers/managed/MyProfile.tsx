import { useContext, useState, useCallback } from "react"
import { User } from "../../App"
import TextField from '@material-ui/core/TextField';
import styled from "styled-components"
import { updateUser } from "../../apis/user"

const Input = styled.input`
  display: "none"
`

export const MyProfile = () => {
  const context: any = useContext(User)
  const user: any = context.user

  const [name, setName] = useState<string>(user.name)
  const [image, setImage] = useState<File>()
  const [preview, setPreview] = useState<string>("")

  const uploadImage = useCallback((e) => {
    const file = e.target.files[0]
    setImage(file)
  }, [])

  const previewImage = useCallback((e) => {
    const file = e.target.files[0]
    setPreview(window.URL.createObjectURL(file))
  }, [])

  // FormData形式でデータを作成
  const createFormData = (): FormData => {
    const formData = new FormData()
    formData.append("name", name)
    if (image) formData.append("image", image)

    return formData
  }

  const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = createFormData()

    await updateUser(user.id, data)
      .then(() => {

      })
  }

  return (
    <>
      {
        user &&
        <form onSubmit={handleUpdateUser} noValidate>
          <TextField
            id="standard-search"
            label="名前"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <div>
            <label htmlFor="icon-button-file">
              <Input
                accept="image/*"
                id="icon-button-file"
                type="file"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  uploadImage(e)
                  previewImage(e)
                }}
              />
            </label>
          </div>
          <div>
            <button type="submit" >編集</button>
          </div>
        </form>
      }

      { preview &&
        <img
          src={preview}
          alt="preview img"

        />

      }
    </>
  )
}
