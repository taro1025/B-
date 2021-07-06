import styled from "styled-components"
import cat from "../../cat.jpeg"
import { NoDecoLink } from "../NoDecoLink";

const CommentWrapper = styled.div`
  margin-left: 1rem;
  border-left: 0.1px solid #111188;
`

const Profile = styled.div`
  padding: .5rem 0 1rem .6rem;

`

const ProfileImg = styled.img`
  height: 2.7rem;
  width: 2.7rem;
  border-radius: 100%;
  float: left;
`

const ProfileSpan = styled.span`
  height: 2.7rem;
  line-height: 2.7rem;
  padding-left: .8rem;
  font-weight: bold;
`

const Text = styled.div`
  padding: 0 .2rem .8rem .6rem;
`

export const Comments = (props: { commentSet: any }) => {
  return (
    <>
      {
        props.commentSet.comment.map((aComment: any, i: number) => {
          return (
            //comment.post_id === post.id &&
            <>
              <CommentWrapper>
                <Profile>
                  <div>
                    <ProfileImg
                      src={props.commentSet.users[i] ? props.commentSet.users[i]?.image.url && props.commentSet.users[i].image.url : cat} />
                  </div>
                  <ProfileSpan><NoDecoLink to={`/user/${aComment.user_id}`}>{aComment.user_name}</NoDecoLink></ProfileSpan>
                </Profile>
                <Text>{aComment.comment}</Text>
              </CommentWrapper>
            </>
          )
        })
      }

    </>
  )

}
