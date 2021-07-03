import styled from "styled-components"
import react, { useState, useEffect, useContext, createContext } from "react"
import { UserId } from "../../App"
import { dummy_posts } from "../../dummyData"
import cat from "../../cat.jpeg"
import dummyImage from "../../dummyImage.jpeg"
import FavoriteIcon from '@material-ui/icons/Favorite';
import SmsIcon from '@material-ui/icons/Sms';
import { NoDecoLink } from "../NoDecoLink";
import { Rank } from "../Rank"
import { Comments } from "./Comments"
import { BookProps, RankProps } from "../../interfaces"
import { getBooks } from "../../apis/getBooks"
import { createLike, deleteLike, indexLike } from "../../apis/like"
import { createComment } from "../../apis/comment"
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { getRank } from "../../apis/rank"

const PostWrapper = styled.div`
  padding-bottom: 60px;
`
const Post = styled.div`
  border-top: 0.1px solid black;
  border-bottom: 0.1px solid black;
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

const BookWrapper = styled.div`
  display: flex;
`


const BookImage = styled.img`
  height: 4.2rem;
  padding-left: .6rem;
`

const BookTitle = styled.span`
  font-size: .7rem;
`


const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-top: solid .5px  #7c7c7c;
`
const CommentButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  appearance: none;
  width: 50%;
  border-right: solid .5px  #7c7c7c;
`

const CommentArea = styled.textarea`
  width: 90vw;
  height: 4rem;
`

const LikedButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  appearance: none;
  width: 50%;
  background-color: pink;
`

const WhiteHeartIcon = styled(FavoriteIcon)`
  color: white;
`
const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  appearance: none;
  width: 50%;
`

const GrayHeartIcon = styled(FavoriteIcon)`
  color: #7c7c7c;
`

export const Posts = (
  props: {
    posts?: BookProps[],
    comments?: any,
    ranks?: RankProps[],
    setComments?: React.Dispatch<any>,
  }
) => {
  //楽天の仕様のため1秒毎にリクエストを送ります。
  function sleep(waitSec: any) {
    return new Promise(function (resolve: any) {

      setTimeout(function () { resolve() }, waitSec);

    });
  }

  //以下のやり方だと、同じ本が連続してても画像urlを取得しているので
  //同じ本が続くときは飛ばすように改善したい。

  interface fetchBooksForPost {
    url: string;
    title: string;
  }

  const [books, setBooks] = useState<fetchBooksForPost[]>()
  let booksForPost: fetchBooksForPost[] = []

  async function getBookImgEveryOneSecond() {
    if (props.posts) {
      for (const post of props.posts) {
        await getBooks(post.book_isbn)
          .then((res) => {
            booksForPost.push({
              url: res.Items[0].Item.mediumImageUrl,
              title: res.Items[0].Item.title
            })
          })
          .catch(res => console.log("失敗"))
        await sleep(1000)
      }
    }
    setBooks(booksForPost)
  }

  //ランク関係
  //const [ranks, setRanks] = useState<any>()
  //const rankEffect = () => {
  //  if (props.posts) {
  //    let ranksTmp: any[] = []
  //    props.posts.map((post) => {
  //      getRank(post.user_id, post.book_isbn)
  //        .then(res => ranksTmp.push(res.rank))
  //    })
  //    return ranksTmp
  //  }
  //}

  //いいね関係

  const [myLikes, setMyLikes] = useState<any>()
  const userId = useContext(UserId)
  useEffect(() => {
    getBookImgEveryOneSecond()
    indexLike(String(userId))
      .then(res => setMyLikes(res.likes))
      .catch(e => console.log("mylikesのセットに失敗"))
    //ランクを取得
    //setRanks(rankEffect())
    //console.log(ranks)
  }, [])

  const like = (postId: number) => {
    createLike(postId)
    setMyLikes([...myLikes, postId])
  }
  const disLike = (postId: number) => {
    deleteLike(String(postId))
    const deletedMyLikes = myLikes.filter((like: number) => { return (like !== postId) })
    setMyLikes(deletedMyLikes)
  }

  //コメント関係
  let initialState = []
  props.posts ?
    initialState = Array(props.posts.length).fill(false)
    :
    initialState = []

  const [isText, setTextfield] = useState<boolean[]>(initialState)
  const [text, setText] = useState("")

  const commentSubmit = (postId: number, i: number) => {
    createComment(postId, text)
    setTextfield(isText.fill(false))
    props.comments[i].push({ comment: text })
    if (props.setComments) {
      props.setComments([...props.comments])
    }
  }

  console.log("ランク取れた?", props.ranks)
  return (
    <>
      <PostWrapper>
        {
          props.posts ?
            props.posts.map((post: any, i: number) => {
              return (
                post.impression &&
                <Post>
                  <Profile>
                    <div><ProfileImg src={cat} /></div>
                    <ProfileSpan><NoDecoLink to={`/user/${post.user_id}`}>{post.user_name}</NoDecoLink></ProfileSpan>
                  </Profile>
                  <Text>{post.impression}</Text>
                  <BookWrapper>
                    <BookImage src={props.ranks && props.ranks[i] && props!.ranks[i].medium_url} />
                    {//{books && books[i] && books[i].url} />
                    }
                    <BookTitle>{books && books[i] && books[i].title}</BookTitle>
                    <Rank rank={props.ranks && props!.ranks![i].rank_id} />
                  </BookWrapper>
                  <ActionWrapper>
                    <CommentButton type="submit" onClick={() => {
                      isText[i] = !isText[i]
                      setTextfield([...isText])
                    }}>
                      <SmsIcon />
                    </CommentButton>
                    {
                      myLikes &&
                        myLikes.includes(post.id) ?

                        <LikedButton
                          onClick={() => disLike(post.id)}
                        >
                          <WhiteHeartIcon />
                        </LikedButton>
                        :
                        <LikeButton
                          onClick={() => like(post.id)}
                        >
                          <GrayHeartIcon />
                        </LikeButton>


                    }
                  </ActionWrapper>
                  {
                    isText[i] && (
                      <div><CommentArea value={text} onChange={(e) => setText(e.target.value)} />
                        <button onClick={() => commentSubmit(post.id, i)}>送信　</button>
                      </div>
                    )
                  }

                  {
                    props.comments &&
                    <Comments comments={props.comments[i]} />

                  }
                </Post>

              )
            })
            :
            dummy_posts.map((post: any) => {

              return (
                <Post>
                  <Profile>
                    <div><ProfileImg src={cat} /></div>
                    <ProfileSpan>{post[0].user_name}</ProfileSpan>
                  </Profile>
                  <Text>{post[0].impression}</Text>
                  <BookWrapper>
                    <BookImage src={dummyImage} />
                    <BookTitle>20題で得た知見nnn</BookTitle>

                  </BookWrapper>
                  <ActionWrapper>
                    <CommentButton>
                      <SmsIcon />
                    </CommentButton>
                    <LikeButton>
                      <WhiteHeartIcon />
                    </LikeButton>
                  </ActionWrapper>
                </Post>
              )
            })
        }
      </PostWrapper>
    </>
  )
}
