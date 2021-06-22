import { dummy_posts } from "../../dummyData"

export const Posts = () => {
  console.log(dummy_posts)

  return (
    <>
      {
        dummy_posts.map((post: any) => {

          return <div>{post[0].impression}</div>
        })
      }
    </>
  )
}
