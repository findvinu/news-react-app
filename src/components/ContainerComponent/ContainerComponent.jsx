import classes from './ContainerComponent.module.scss';

const ContainerComponent = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default ContainerComponent;