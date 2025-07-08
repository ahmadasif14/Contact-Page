// import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";
const Button = (props) => {

const { isOutLine, icon, text, ...rest} = props;
  // console.log(props); 
  return (
    <button 
    {...rest}
    className={isOutLine ? styles.outline_btn: styles.primary_btn}>
       {/* <MdMessage fontSize="24px"/> */}
       {/* VIA SUPPROT CHAT */}
       {icon}
       {text}
    </button>
  );
};

export default Button;