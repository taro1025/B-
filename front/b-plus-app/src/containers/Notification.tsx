import { getNotice, checkedNotice } from "../apis/notification"
import { useEffect, useState, useContext } from "react"
import { Notice } from "../App"
import styled from "styled-components"
import cat from "../cat.jpeg"
import { NoDecoLink } from "../components/NoDecoLink";

const NoticeWrapper = styled.div`
  //padding-top: .5rem;
  padding-bottom: 60px;
`

const NoticeCard = styled.div`
  padding-bottom: 1rem;
  margin-bottom: .1rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`

const CardWrapper = styled.div`
  padding-left: .5rem;
  padding-top: .5rem;
`

const TextWrapper = styled.div`
  padding-left: .3rem;
`

const Name = styled.span`
  font-weight: bold;
`

const ActionWrapper = styled.div`

`

const ActionMessage = styled.p`
  display: inline-block;
  padding-top: .8rem;
`

//const ImpressionWrapper = styled.div`
//  margin-top: .5rem;
//
//`
//
//const Impression = styled.span`
//　color: #808080;
//`

const ImgWrapper = styled.div`
  //display: flex;

`

const ProfileImg = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  float: left;
`

export const Notification = () => {
  const [notices, setNotice] = useState<[] | undefined>()

  const notice = useContext(Notice)
  useEffect(() => {
    getNotice()
      .then((res) => {
        setNotice(res.notices)
      })
    checkedNotice()
      .then(res => notice.setIsNotice(false))
  }, [])

  console.log("notice", notices)
  return (
    <>
      <NoticeWrapper>
        {
          notices &&
          notices!.map((notice: any) => {
            console.log("通知　", notices)
            switch (notice.notice.action) {
              case 'follow':
                return (
                  <NoticeCard>
                    <NoDecoLink to={`user/${notice.notice.visitor_id}`}>
                      <CardWrapper>
                        <ImgWrapper><ProfileImg src={cat} /></ImgWrapper>
                        <TextWrapper>
                          <Name>{notice.name}</Name>
                          <ActionWrapper><ActionMessage>あなたをフォローしました</ActionMessage></ActionWrapper>
                        </TextWrapper>
                      </CardWrapper>
                    </NoDecoLink>
                  </NoticeCard>
                )
              case 'like':
                return (
                  <NoticeCard>
                    <NoDecoLink to={`posts/${notice.notice.post_id}`}>
                      <CardWrapper>
                        <Name>{notice.name}</Name>
                        <ActionWrapper><ActionMessage>あなたの投稿にいいねしました。</ActionMessage></ActionWrapper>
                      </CardWrapper>
                    </NoDecoLink>
                  </NoticeCard>
                )
              case 'comment':
                return (
                  <NoticeCard>
                    <NoDecoLink to={`posts/${notice.notice.post_id}`}>
                      <CardWrapper>
                        <Name>{notice.name}</Name>
                        <ActionWrapper><ActionMessage>あなたの投稿にコメントしました。</ActionMessage></ActionWrapper>
                      </CardWrapper>
                    </NoDecoLink>
                  </NoticeCard>
                )
              default:
                return
            }
          })

        }
      </NoticeWrapper>
    </>
  );
}
