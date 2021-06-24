import { Bar } from 'react-chartjs-2';

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

  const data = {
    labels: [twentyEightAgo, twentyFourAgo, twentyAgo, sixTeenAgo, twelveAgo, eightAgo, fourAgo, today],
    datasets: [
      {
        label: '読んだ量',
        data: [200, 452, 671, 792, 900, 1000, 1223, 1345],
        backgroundColor: [
          'rgba(6, 95, 227, 1)',

        ],

      },
    ],
  };

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
  return (
    <>
      <Bar
        type='bar'
        data={data}
        width={100}
        height={100}
        options={options}
      />
    </>
  );
};
