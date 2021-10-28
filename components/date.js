import { parseISO, format } from 'date-fns';

const Date = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
  return;
};

export default Date;
