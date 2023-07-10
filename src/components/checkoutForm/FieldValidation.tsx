// CSS
import './FieldValidation.css';

// External components
import { Form } from 'react-bootstrap';

// Implementation
function FieldValidation(props: { fieldName: string }) {

  return (
    <Form.Control.Feedback className="field-validation" type="invalid">{props.fieldName} is required.</Form.Control.Feedback>
  );
}

export default FieldValidation;
