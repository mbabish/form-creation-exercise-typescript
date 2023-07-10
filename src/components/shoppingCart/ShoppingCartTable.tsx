// CSS
import './ShoppingCartTable.css';

// External components
import { Table } from 'react-bootstrap';

// Internal components

// Properties
import IShoppingCartHooks from '../../interfaces/shoppingCart/IShoppingCartHooks';
import ShoppingCartRow from './ShoppingCartRow';

// Implementation
function ShoppingCartTable(props: { shoppingCartHooks: IShoppingCartHooks }) {

  var tableRows :Array<any> = [];
  props.shoppingCartHooks.shoppingCart.items.forEach((cartItem, productType) => {
    if (cartItem.amount > 0) {
      tableRows.push(<ShoppingCartRow cartItem={cartItem} /> )
    }
  });

  return (
    <Table>
      { (tableRows.length === 0) && <thead>
        <tr>
          <th>No tickets have been selected</th>
        </tr>
        </thead>
      }
      { (tableRows.length > 0) && <thead>
        <tr>
          <th colSpan={8}>Ticket</th>
          <th className="tableCenter">Amount</th>
          <th className="tableRight">Ticket Cost</th>
          <th className="tableRight">Total Cost</th>
        </tr>
        </thead>
      }
      { tableRows.length > 0 && <tbody>
          { tableRows.map((tableRow) => tableRow) }
        </tbody>
      }
    </Table>
  );
}

export default ShoppingCartTable;
