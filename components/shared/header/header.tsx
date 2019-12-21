import React from "react";
import {
  fade,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Box, Button } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
    },
    sectionDesktop: {
      // display: "none",
      // [theme.breakpoints.up("md")]: {
      //   display: "flex"
      // }
    },
    sectionMobile: {
      // display: "flex",
      // [theme.breakpoints.up("md")]: {
      //   display: "none"
      // }
    }
  })
);

export default function Header() {
  const classes = useStyles({});
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl
  ] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link href="/about-us">
        <MenuItem>About US</MenuItem>
      </Link>
      <Link href="/contact-us">
        <MenuItem>Contact US</MenuItem>
      </Link>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Link href="/">
            <Box display="flex" flexDirection="row" alignItems="center">
                <div className="tb-width--56 tb-flex--align-items tb-cursor--pointer">
                  <img src="assets/svg/logo.svg" className="tb-icon--40" alt="" />
                </div>
                <div className="tbpadding--12"></div>
                <p className="tb-typo--h4 tb-color--grey--700">ABC Couriers</p>
            </Box>
          </Link>
          <div className="tb-flex" />
          <div className={classes.sectionDesktop}>
            <Box display="flex" flexDirection="row" pr={1}>
              <Button>
                <Link href="/about-us">
                  <a className="tb-typo--button tb-padding--2-12 tb-color--grey-900">
                    About US
                  </a>
                </Link>
              </Button>
              <Button>
                <Link href="/contact-us">
                  <a className="tb-typo--button tb-padding--2-12 tb-color--grey-900">
                    Contact US
                  </a>
                </Link>
              </Button>
            </Box>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
