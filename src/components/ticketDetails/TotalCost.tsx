// Internal libraries
import currencyFormatter from "../../helpers/currencyFormatter";

// External components
import { Stack } from 'react-bootstrap';

// Implementation
function TotalCost(props : { totalCost: number }) {
  return (
    <Stack direction="horizontal" className="col-md-11">
      <h4 className="col-md-10">Total Cost</h4>
      <input type="text" min="0" className="form-control" value={currencyFormatter.format(props.totalCost / 100)} readOnly disabled />
    </Stack>
  );
}

export default TotalCost;
