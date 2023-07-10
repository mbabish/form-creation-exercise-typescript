interface ITicketType {
  type: string;
  name: string;
  description: string;
  cost: number // units: pennies
}

export default ITicketType;