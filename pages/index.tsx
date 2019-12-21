import React, { Component } from "react";
import Router from "next/router";
import BaseConatiner from "../container/container";
import { useTheme, Typography, Box } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Home from "../components/ui/home/home";

export default function Index() {
  return (
    <React.Fragment>
      <BaseConatiner>
        <Home />
      </BaseConatiner>
    </React.Fragment>
  );
}
