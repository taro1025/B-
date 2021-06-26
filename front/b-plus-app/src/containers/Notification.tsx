import { getNotice } from "../apis/getNotice"
import { useEffect, useState } from "react"
export const Notification = () => {
  const [notices, setNotice] = useState<[] | undefined>()

  useEffect(() => {
    getNotice()
      .then((res) => {
        setNotice(res.notices)
      })
  }, [])

  console.log("notice", notices)
  return (
    <>
      {
        notices &&
        notices!.map((notice: any) => {
          switch (notice.notice.action) {
            case 'follow':
              return (
                <div>
                  <span>{notice.name}さんがフォローしました</span>
                </div>
              )
            case 'like':
              return ()
            case 'comment':
              return ()
            default:
              return
          }
        })

      }

    </>
  );
}
