import Link from "next/link";
import classes from "./button.module.css";

const Button = (props) => {
  if (props?.link) {
    return (
      <Link className={classes?.btn} href={props.link}>
        {props.children}
      </Link>
    );
  } else {
    return <Button className={classes?.btn}>{props.children}</Button>;
  }
};

export default Button;
