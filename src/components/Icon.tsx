// CSS
import './Icon.css';

// Props
import IIconProps from '../interfaces/IIconProps';

// Implementation
function Icon (props: IIconProps) {
  return (
    <img src={"./assets/img/" + props.iconName + ".png"} className="icon" alt={ props.iconName + "icon"}/>
  );
}

export default Icon;
