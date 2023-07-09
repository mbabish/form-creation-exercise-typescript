// External libraries
import { useState, useEffect } from "react";

import DefaultShoppingCart from "../interfaces/shoppingCart/IShoppingCart.default";
import DefaultContactInfo from "../interfaces/shoppingCart/IContactInfo.default";
import DefaultCreditCardInfo from "../interfaces/shoppingCart/ICreditCardInfo.default";

import IProduct from "../interfaces/shoppingCart/IProduct";
import IShoppingCartHooks from "../interfaces/shoppingCart/IShoppingCartHooks";
import ICartItem from "../interfaces/shoppingCart/ICartItem";
import simulateNetworkRequest from "../actions/simulateNetworkRequest";

const useShoppingCart = () => {

  // ============================================================
  // State
  const [shoppingCart, setShoppingCart] = useState(DefaultShoppingCart());
  const [contactInfo, setContactInfo] = useState(DefaultContactInfo());
  const [creditCardInfo, setCreditCardInfo] = useState(DefaultCreditCardInfo());
  const [isPurchaseInProgress, setPurchaseInProgress] = useState(false);
  const [purchaseResult, setPurchaseResult] = useState('');

  // ============================================================
  // Effect
  useEffect(() => {
    if (isPurchaseInProgress) {
      setPurchaseResult("");
      simulateNetworkRequest().then(() => {
        setPurchaseInProgress(false);
        setPurchaseResult("Purchase successful");
        emptyCart();
      });
    }
  }, [isPurchaseInProgress]);

  // ============================================================
  // Empties the cart of all items
  const emptyCart = () => {
    debugger;
    var newShoppingCart = {...DefaultShoppingCart()};
    setShoppingCart(newShoppingCart);
  }

  // ============================================================
  // Get the current amount of a product selection in the cart
  // - Returns zero if the amount hasn't been set yet
  const getProductAmount = (productType: string) => {
    var item: ICartItem | undefined = shoppingCart.items.get(productType);
    return item !== undefined ? item.amount : 0;
  }

  // ============================================================
  // Update a product selection in the cart
  const updateProductAmount = (product: IProduct, amount: number) => {

    // TODO... Add validation
    // - Is {cost} an integer greater than zero?
    // - Is {number} an integer greater than zero?

    // Clone the current shopping cart and update the data
    var newShoppingCart = {...shoppingCart};
    newShoppingCart.items.set(
      product.type,
      {
        product: product,
        amount: amount
      }
    );
    setShoppingCart(newShoppingCart);
  };

  // ============================================================
  // Calculate the total cost to purchase
  const getTotalCost = () => {
    var totalCost = 0;
    shoppingCart.items.forEach((item: ICartItem) => {
      totalCost += item.product.cost * item.amount;
    });
    return totalCost;
  };

  // ============================================================
  const completePurchase = () => {
    setPurchaseInProgress(true);
  }

  // ============================================================
  // Return the state of the cart and the callback functions
  var shoppingCartHooks: IShoppingCartHooks = {
    shoppingCart: shoppingCart,
    contactInfo: contactInfo,
    creditCardInfo: creditCardInfo,
    isPurchaseInProgress: isPurchaseInProgress,
    purchaseResult: purchaseResult,
    emptyCart: emptyCart,
    getProductAmount : getProductAmount,
    updateProductAmount: updateProductAmount,
    getTotalCost: getTotalCost,
    setContactInfo: setContactInfo,
    setCreditCardInfo: setCreditCardInfo,
    completePurchase: completePurchase
  }
  return shoppingCartHooks;
};

export default useShoppingCart;