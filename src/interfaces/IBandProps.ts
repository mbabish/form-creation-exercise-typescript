import IBandDetailsProps from './IBandDetailsProps';
import ITicketTypeProps from './ITicketTypeProps';

interface IBandProps extends IBandDetailsProps {
  ticketTypes: Array<ITicketTypeProps>;
}

export default IBandProps;