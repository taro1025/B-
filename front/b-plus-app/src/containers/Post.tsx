import { useState, useEffect } from "react"
import { getPost } from "../apis/posts"
import { useParams } from "react-router-dom"
import { Posts } from "../components/detailTabs/Posts"

//一つの投稿のビュー


export const Post = () => {

  const [post, setPost] = useState<any>()
  const [comments, setComments] = useState<any>()
  const [ranks, setRanks] = useState<any>()
  const [users, setUsers] = useState<any>()

  const params: any = useParams()
  useEffect(() => {
    if (params.id) {
      getPost(params.id)
        .then(res => {
          console.log("res", res)
          setPost(res.post)
          setComments(res.comments)
          setRanks(res.ranks)
          setUsers(res.users)
        })
        .catch(e => console.log(e))
    }
  }, [])
  return (
    <>
      {
        //post &&
        //<Posts
        //  posts={post}
        //  comments={comments && comments}
        //  ranks={ranks && ranks}
        //  users={users}
        //  setComments={setComments}
        ///>
      }

    </>
  )
}
