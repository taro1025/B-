import { getNotice } from "../apis/getNotice"
import { useEffect, useState } from "react"
export const Notification = () => {
  const [notices, setNotice] = useState()

  useEffect(() => {
    getNotice()
      .then((res) => {
        setNotice(res.notices)
      })
  }, [])

  console.log("notice", notices)
  return (
    <>
      <div>
        <span>ジローさんが〇〇しました</span>
        <p>ほんとにそれですよね。私もあああだったのでとてもよくわかります。</p>
      </div>
    </>
  );
}
