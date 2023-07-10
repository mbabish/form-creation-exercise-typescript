// Internal libraries
import currencyFormatter from '../../helpers/currencyFormatter';

// Properties
import ICartItem from '../../interfaces/shoppingCart/ICartItem';

// Implementation
function ShoppingCartRow(props: { cartItem: ICartItem }) {

  // Alias for shopping cart item properties
  var product = props.cartItem.product;
  var amount = props.cartItem.amount;
  var itemCost = currencyFormatter.format(product.cost / 100);
  var totalCost = currencyFormatter.format((product.cost * amount) / 100);

  return (
    <tr>
      <td colSpan={8}>{product.name}</td>
      <td className="tableCenter">{amount}</td>
      <td className="tableRight">{itemCost}</td>
      <td className="tableRight">{totalCost}</td>
    </tr>
  );
}

export default ShoppingCartRow;
