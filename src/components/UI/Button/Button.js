import classes from "./Button.module.css";

function Button(props) {
  const classNames = `${classes.btn} ${classes[`btn-${props.color}`]}`;

  return <button className={classNames}>{props.children}</button>;
}

export default Button;
