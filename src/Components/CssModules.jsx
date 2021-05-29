import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- CssModules -</p>
      <p>cssと一緒だから擬似要素が使用可</p>
      <button className={classes.button}>Fight!!!</button>
    </div>
  );
};
