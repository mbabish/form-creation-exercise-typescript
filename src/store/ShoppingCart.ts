// import _ from "lodash";

class ShoppingCart {

  bandId: string | null = null;
  tickets: any = new Map();

  setBand = (bandId: string) => {
    if (this.bandId !== bandId) {
      this.bandId = bandId;
      this.tickets = new Map();
    }
  };

  updateTicketAmount = (type: string, cost: number, number: number) => {
    // TODO... Add validation
    // - Is {cost} an integer greater than zero?
    // - Is {number} an integer greater than zero?
    this.tickets.set(type, {
      cost: cost,
      number: number
    });
  };

  getTotalCost = () => {
    var totalCost = 0;
    this.tickets.forEach((value: any) => {
      totalCost += value.cost * value.number;
    });

    return {
      numItems: this.tickets.size,
      cost: totalCost
    };
  };
};

export default ShoppingCart;