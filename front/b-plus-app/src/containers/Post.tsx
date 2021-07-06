import { useState, useEffect } from "react"
import { getPost } from "../apis/posts"
import { useParams } from "react-router-dom"

export const Post = () => {

  const [post, setPost] = useState<any>()
  const params: any = useParams()
  useEffect(() => {
    if (params.id) {
      getPost(params.id)
        .then(res => {
          console.log("res", res)
          setPost(res.post)
        })
        .catch(e => console.log(e))
    }
  }, [])
  return (
    <>
      <p>oke</p>
    </>
  )
}
