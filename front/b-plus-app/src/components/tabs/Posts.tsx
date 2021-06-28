import styled from "styled-components"
import { useState, useEffect } from "react"
import { dummy_posts } from "../../dummyData"
import cat from "../../cat.jpeg"
import dummyImage from "../../dummyImage.jpeg"
import FavoriteIcon from '@material-ui/icons/Favorite';
import SmsIcon from '@material-ui/icons/Sms';
import { BookProps } from "../../interfaces"
import { getBooks } from "../../apis/getBooks"

const PostWrapper = styled.div`
  padding-bottom: 60px;
`
const Post = styled.div`
  border: 0.1px solid black;
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

const Rank = styled.span`
  font-style: italic;
`

const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const CommentButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  appearance: none;
  width: 50%;
`

const LikeButton = styled.button`
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


export const Posts = (props: { posts?: BookProps[] }) => {
  console.log(dummy_posts)
  const books = []

  function sleep(waitSec: any) {
    //楽天の仕様上1秒毎にリクエストを送ります。
    return new Promise(function (resolve: any) {

      setTimeout(function () { resolve() }, waitSec);

    });
  }

  async function getBookImgEveryOneSecond() {
    if (props.posts) {
      for (const post of props.posts) {
        await getBooks(post.book_isbn)
          .then((res) => {

            books.push(res.Items[0].Item.mediumImageUrl)

          })
          .catch(res => console.log("失敗"))
        await sleep(1000)
      }
    }
  }

  useEffect(() => {
    getBookImgEveryOneSecond()
  }, [])

  return (
    <>
      <PostWrapper>
        {
          props.posts ?
            props.posts.map((post: any) => {
              return (

                <Post>
                  <Profile>
                    <div><ProfileImg src={cat} /></div>
                    <ProfileSpan>{post.user_name}</ProfileSpan>
                  </Profile>
                  <Text>{post.impression}</Text>
                  <BookWrapper>
                    <BookImage src={dummyImage} />
                    <BookTitle>20題で得た知見</BookTitle>
                    <Rank>S</Rank>
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
                    <BookTitle>20題で得た知見</BookTitle>
                    <Rank>S</Rank>
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
