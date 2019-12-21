import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import Head from "next/head";
import React from "react";
import Header from "../components/shared/header/header";
import styles from "./containerStyle";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles((theme: Theme) => styles(theme));

const BaseConatiner = props => {
  const { className, children, cannonical } = props;
  const classes = useStyles({});
  const theme = useTheme();
  const ltsm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <Head>
        <title>ABC Courier Service</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500 & display=swap" rel="stylesheet" />
      </Head>
      <div>
        <Header></Header>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div>
          {children}
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default BaseConatiner;
