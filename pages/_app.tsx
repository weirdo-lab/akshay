import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import "../public/style.scss";
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';



const sheets = new ServerStyleSheets();

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(``);
    document.insertBefore(comment, document.documentElement);
  }

  
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Component {...pageProps} className="tb-height--full tb-width--full" />
      </React.Fragment>
    );
  }
}
