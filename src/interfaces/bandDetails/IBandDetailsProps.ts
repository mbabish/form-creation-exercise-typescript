import IBandInfoProps from './IBandInfoProps';
import IConcertInfoProps from './IConcertInfoProps';

interface IBandDetailsProps extends IBandInfoProps, IConcertInfoProps {
  id: string;
  name: string;
}

export default IBandDetailsProps;
