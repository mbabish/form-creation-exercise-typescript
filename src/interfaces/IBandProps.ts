import IBandDetailsProps from './bandDetails/IBandDetailsProps';
import ITicketTypeProps from './ticketDetails/ITicketTypeProps';

interface IBandProps extends IBandDetailsProps {
  ticketTypes: Array<ITicketTypeProps>;
}

export default IBandProps;