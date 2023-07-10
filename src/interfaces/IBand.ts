import IBandDetails from './bandDetails/IBandDetails';
import ITicketType from './ticketDetails/ITicketType';

interface IBand extends IBandDetails {
  ticketTypes: Array<ITicketType>;
}

export default IBand;