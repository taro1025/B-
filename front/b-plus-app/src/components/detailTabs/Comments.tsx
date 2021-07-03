

export const Comments = (props: { comments: any }) => {
  return (
    <>
      {
        props.comments.map((comment: any) => {
          return (
            //comment.post_id === post.id &&
            <p>{comment.comment}</p>
          )
        })
      }

    </>
  )

}
