import { Bar } from 'react-chartjs-2';

export const BookLog = () => {

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '読んだ量',
        data: [200, 452, 671, 792, 900],
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
        height={50}
        options={options}
      />
    </>
  );
};
