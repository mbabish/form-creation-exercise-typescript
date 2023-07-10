// CSS
import './Icon.css';

// Properties
import IIcon from '../interfaces/IIcon';

// Implementation
function Icon (props: IIcon) {
  return (
    <img src={"./assets/img/" + props.iconName + ".png"} className="icon" alt={ props.iconName + "icon"}/>
  );
}

export default Icon;
