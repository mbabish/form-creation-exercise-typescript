// CSS
import './InputTextField.css';

// External components
import { FloatingLabel, Form } from 'react-bootstrap';

// Properties
import IInputTextField from '../../interfaces/checkoutForm/IInputTextField';

// Implementation
function InputTextField(props: IInputTextField) {

  return (
    <FloatingLabel controlId={props.type} label={props.placeholder} className="mb-1">
      <Form.Control type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        disabled={props.isDisabled}
        isInvalid={props.validationMessage.length > 0}/>
      <Form.Control.Feedback className="field-validation" type="invalid">{props.validationMessage}</Form.Control.Feedback>
    </FloatingLabel>
  );
}

export default InputTextField;
