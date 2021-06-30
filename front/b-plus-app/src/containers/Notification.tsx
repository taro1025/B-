import { getNotice, checkedNotice } from "../apis/notification"
import { useEffect, useState } from "react"
import styled from "styled-components"
import cat from "../cat.jpeg"

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

  useEffect(() => {
    getNotice()
      .then((res) => {
        setNotice(res.notices)
      })
    checkedNotice()
  }, [])

  console.log("notice", notices)
  return (
    <>
      <NoticeWrapper>
        {
          notices &&
          notices!.map((notice: any) => {

            switch (notice.notice.action) {
              case 'follow':
                return (
                  <NoticeCard>
                    <CardWrapper>
                      <ImgWrapper><ProfileImg src={cat} /></ImgWrapper>
                      <TextWrapper>
                        <Name>{notice.name}</Name>
                        <ActionWrapper><ActionMessage>あなたをフォローしました</ActionMessage></ActionWrapper>
                      </TextWrapper>

                    </CardWrapper>
                  </NoticeCard>
                )
              case 'like':
                return (
                  <NoticeCard>
                    <CardWrapper>
                      <Name>{notice.name}</Name>
                      <ActionWrapper><ActionMessage>あなたのの投稿にいいねしました。</ActionMessage></ActionWrapper>
                    </CardWrapper>
                  </NoticeCard>
                )
              case 'comment':
                return (
                  <NoticeCard>
                    <CardWrapper>
                      <Name>{notice.name}</Name>
                      <ActionWrapper><ActionMessage>あなたの投稿にコメントしました。</ActionMessage></ActionWrapper>
                    </CardWrapper>
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
