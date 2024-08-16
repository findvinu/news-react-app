import { Typography } from "@mui/material";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
        <Typography variant="body2" align="center">
          © 2024 Enfuse Solutions
        </Typography>
    </footer>
  );
};

export default Footer;
