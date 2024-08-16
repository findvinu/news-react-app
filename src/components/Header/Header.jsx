import { AppBar, Toolbar, Typography } from "@mui/material";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography variant="h6">Enfuse Solutions News App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
