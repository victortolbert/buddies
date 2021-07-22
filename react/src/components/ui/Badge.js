import classes from "./Badge.module.css";

const Badge = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Badge;
