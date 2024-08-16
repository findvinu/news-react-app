import { Header, Footer, ContainerComponent } from "../index";

import classes from "./Layout.module.scss";


const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Header />
      <ContainerComponent>
        <main>{children}</main>
      </ContainerComponent>
      <Footer />
    </div>
  );
};

export default Layout;
