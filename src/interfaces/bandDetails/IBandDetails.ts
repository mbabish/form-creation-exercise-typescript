import IBandInfo from './IBandInfo';
import IConcertInfo from './IConcertInfo';

interface IBandDetails extends IBandInfo, IConcertInfo {
  id: string;
  name: string;
}

export default IBandDetails;
