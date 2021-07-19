import { useState, useEffect } from "react"
//import { getPost } from "../apis/posts"
import { useParams } from "react-router-dom"
import { Posts } from "../components/detailTabs/Posts"
import { postI } from "../interfaces"
import { graphQL } from "../apis/graphQL/client"


//一つの投稿のビュー


export const Post = () => {

  const [post, setPost] = useState<postI[]>()


  const params: any = useParams()
  useEffect(() => {
    if (params.id) {
      //ポストのidを受け取りそのポストを返す
      graphQL(`
      {
        post(id: ${params.id}){
          id
          impression
          title
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
        .then(res => {
          console.log("res", res)
          setPost(res.post)
        })
        .catch(e => console.log(e))
    }
  }, [])
  return (
    <>
      {
        post &&
        <Posts
          posts={post}
          setComments={setPost}
        />
      }

    </>
  )
}
