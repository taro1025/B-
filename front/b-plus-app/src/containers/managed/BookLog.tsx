import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom"
import { Bar } from 'react-chartjs-2';
import styled from "styled-components"
import { User } from "../../App";
import { getGraphData } from "../../apis/getGraphData"
import { getMonthData } from "../../apis/getMonthData"
import { GraphInterface, MonthInterface } from "../../interfaces"

export const BookLog = () => {

  const date = new Date();

  const today: string = (date.getMonth() + 1) + '/' + date.getDate()
  date.setDate(date.getDate() - 4)
  const fourAgo: string = (date.getMonth() + 1) + '/' + date.getDate()
  date.setDate(date.getDate() - 4)
  const eightAgo: String = (date.getMonth() + 1) + '/' + date.getDate()
  date.setDate(date.getDate() - 4)
  const twelveAgo: String = (date.getMonth() + 1) + '/' + date.getDate()
  date.setDate(date.getDate() - 4)
  const sixTeenAgo: string = (date.getMonth() + 1) + '/' + date.getDate()
  date.setDate(date.getDate() - 4)
  const twentyAgo: string = (date.getMonth() + 1) + '/' + date.getDate()
  date.setDate(date.getDate() - 4)
  const twentyFourAgo: string = (date.getMonth() + 1) + '/' + date.getDate()
  date.setDate(date.getDate() - 4)
  const twentyEightAgo: string = (date.getMonth() + 1) + '/' + date.getDate()



  const [graphData, setGraphData] = useState<GraphInterface>()
  let data
  if (graphData) {
    data = {
      labels: [twentyEightAgo, twentyFourAgo, twentyAgo, sixTeenAgo, twelveAgo, eightAgo, fourAgo, today],
      datasets: [
        {
          label: '読んだ量',
          data: [
            graphData!.twenty_eight.page,
            graphData!.twenty_four.page,
            graphData!.twenty.page,
            graphData!.six_teen.page,
            graphData!.twelve.page,
            graphData!.eight.page,
            graphData!.four.page,
            graphData!.today.page
          ],
          backgroundColor: [
            'rgba(6, 95, 227, 1)',

          ],

        },
      ],
    };
  } else {
    data = {
      labels: [twentyEightAgo, twentyFourAgo, twentyAgo, sixTeenAgo, twelveAgo, eightAgo, fourAgo, today],
      datasets: [
        {
          label: '読んだ量',
          data: [],
          backgroundColor: [
            'rgba(6, 95, 227, 1)',

          ],

        },
      ],
    };
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };




  const [monthData, setMonthData] = useState<MonthInterface>()
  const params: any = useParams()

  useEffect(() => {
    if (typeof params.id === 'undefined') {
      return
    } else {
      getGraphData(params.id)//context.user.id)
        .then((res) =>
          setGraphData(res)
        )
      getMonthData(params.id)//context.user.id)
        .then((res) => {
          setMonthData(res)
        })
    }
  }, [])
  const month = new Date();

  //const thisLastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const todayNum: number = new Date().getDate()
  const lastLastDay = new Date(month.getFullYear(), month.getMonth(), 0).getDate();
  return (
    <>
      <Bar
        type='bar'
        data={data}
        width={100}
        height={100}
        options={options}
      />


      <Wrapper>
        <h1>今月と先月の比較</h1>
        <MonthWrapper>
          <Month>
            <span>{month.getMonth() + 1}月</span>
            <div><Strong>{monthData && monthData.this_month.page}</Strong><Unit>ページ</Unit></div>
            <div><Strong>{monthData && monthData.this_month.amount_book}</Strong><Unit>冊</Unit></div>
            <div><Strong>{monthData ? Math.floor(monthData.this_month.page / todayNum) : 0}</Strong><Unit>ページ/日</Unit></div>
          </Month>
          <Month>
            <span>{month.getMonth()}月</span>
            <div><Strong>{monthData && monthData.last_month.page}</Strong><Unit>ページ</Unit></div>
            <div><Strong>{monthData && monthData.last_month.amount_book}</Strong><Unit>冊</Unit></div>
            <div><Strong>{monthData ? Math.floor(monthData.last_month.page / lastLastDay) : 0}</Strong><Unit>ページ/日</Unit></div>
          </Month>
        </MonthWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 60px;
`
const MonthWrapper = styled.div`
  display: flex;
  //justify-content: center;
`

const Strong = styled.span`
  font-weight: bold;
`

const Unit = styled.span`
  padding-left: .2rem;
  font-size: .5rem;
`

const Month = styled.div`
  width: 50vw;
`
