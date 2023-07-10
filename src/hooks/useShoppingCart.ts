// External libraries
import { useState, useEffect } from "react";

// Internal libraries
import simulateNetworkRequest from "../actions/simulateNetworkRequest";
import validateContactInfo from "../helpers/validateContactInfo";
import validateCreditCardInfo from "../helpers/validateCreditCardInfo";

import DefaultShoppingCart from "../interfaces/shoppingCart/IShoppingCart.default";
import DefaultContactInfo from "../interfaces/checkoutForm/IContactInfo.default";
import DefaultCreditCardInfo from "../interfaces/checkoutForm/ICreditCardInfo.default";

import IProduct from "../interfaces/shoppingCart/IProduct";
import IShoppingCartHooks from "../interfaces/shoppingCart/IShoppingCartHooks";
import ICartItem from "../interfaces/shoppingCart/ICartItem";
import IContactInfo from "../interfaces/checkoutForm/IContactInfo";
import ICreditCardInfo from "../interfaces/checkoutForm/ICreditCardInfo";

const useShoppingCart = () => {

  // ============================================================
  // State
  const [shoppingCart, setShoppingCart] = useState(DefaultShoppingCart());
  const [contactInfo, setContactInfo] = useState(DefaultContactInfo());
  const [creditCardInfo, setCreditCardInfo] = useState(DefaultCreditCardInfo());
  const [contactInfoValidation, setContactInfoValidation] = useState(DefaultContactInfo());
  const [creditCardInfoValidation, setCreditCardInfoValidation] = useState(DefaultCreditCardInfo());
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
    var newShoppingCart = {...DefaultShoppingCart()};
    setShoppingCart(newShoppingCart);
  }

  // ============================================================
  // Empties the cart of all items
  const resetPurchaseResult = () => {
    if (purchaseResult !== "") {
      setPurchaseResult("");
    }
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
    // - Is {number} an integer equal or greater than zero?

    // If the new amount is greater than zero, reset the purchase result
    if (amount > 0) {
      resetPurchaseResult();
    }

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
  const updateContactInfo = (contactInfo: IContactInfo) => {
    setContactInfoValidation(DefaultContactInfo());
    return setContactInfo(contactInfo);
  }

  // ============================================================
  const updateCreditCardInfo = (creditCardInfo: ICreditCardInfo) => {
    setCreditCardInfoValidation(DefaultCreditCardInfo());
    return setCreditCardInfo(creditCardInfo);
  }
  
  // ============================================================
  const completePurchase = () => {
    var newContactInfoValidation = validateContactInfo(contactInfo);
    setContactInfoValidation(newContactInfoValidation.validation);

    var newCreditCardInfoValidation = validateCreditCardInfo(creditCardInfo);
    setCreditCardInfoValidation(newCreditCardInfoValidation.validation);

    if (newContactInfoValidation.isValid && newCreditCardInfoValidation.isValid) {
      setPurchaseInProgress(true);
    }
  }

  // ============================================================
  // Return the state of the cart and the callback functions
  var shoppingCartHooks: IShoppingCartHooks = {
    shoppingCart: shoppingCart,
    contactInfo: contactInfo,
    creditCardInfo: creditCardInfo,
    contactInfoValidation: contactInfoValidation,
    creditCardInfoValidation: creditCardInfoValidation,
    isPurchaseInProgress: isPurchaseInProgress,
    purchaseResult: purchaseResult,
    emptyCart: emptyCart,
    getProductAmount : getProductAmount,
    updateProductAmount: updateProductAmount,
    getTotalCost: getTotalCost,
    updateContactInfo: updateContactInfo,
    updateCreditCardInfo: updateCreditCardInfo,
    completePurchase: completePurchase
  }
  return shoppingCartHooks;
};

export default useShoppingCart;