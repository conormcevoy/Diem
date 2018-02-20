const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

const pad2 = (number): any => {
  return (number < 10 ? '0' : '') + number;
}

export const getDate = (): any => {
  const dateOne = Date();
  const dateSplitArray = dateOne.split(' ');
  const month = pad2(months.indexOf(dateSplitArray[1]) + 1);
  const year = parseInt(dateSplitArray[3])
  const day = parseInt(dateSplitArray[2])
  const date = `${day}-${month}-${year}`;
  return {
    _d: dateOne,
    date: date,
    day: day,
    month: month,
    year: year,
    time: dateSplitArray[4]
  };
};