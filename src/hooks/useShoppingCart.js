// External libraries
import { useState } from "react";
import _ from "lodash";

const useShoppingCart = (ticketTypes) => {

  // Initialize state
  const [shoppingCart, setShoppingCart] = useState({
    bandId: null,
    tickets: new Map(),
  });

  // Reset the cart if the band changes
  const setBand = (bandId) => {
    if (shoppingCart.bandId !== bandId) {
      var newShoppingCart = _.cloneDeep(shoppingCart);
      newShoppingCart = {
        bandId: bandId,
        tickets: new Map(),
      };
      setShoppingCart(newShoppingCart);
    }
  };

  // Update the ticket amounts
  const updateTicketAmount = (type, cost, number) => {
    // TODO... Add validation
    // - Is {cost} an integer greater than zero?
    // - Is {number} an integer greater than zero?
    
    var newShoppingCart = _.cloneDeep(shoppingCart);

    newShoppingCart.tickets.set(type, {
      cost: cost,
      number: number
    });
    setShoppingCart(newShoppingCart);
  };

  // Calculate the total cost and number of items to purchase
  const getTotalCost = () => {
    var totalCost = 0;
    shoppingCart.tickets.forEach((value) => {
      totalCost += value.cost * value.number;
    });

    return {
      numItems: shoppingCart.tickets.size,
      cost: totalCost
    };
  };

  // Return the state of the cart and the callback functions
  return { shoppingCart, setBand, updateTicketAmount, getTotalCost };
};

export default useShoppingCart;