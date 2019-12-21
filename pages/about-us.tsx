import React, { Component } from "react";
import Router from "next/router";
import BaseConatiner from "../container/container";
import { useTheme, Typography, Box } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AboutUs from "../components/ui/about-us/aboutus";

export default function AboutUsContainer() {
  return (
    <React.Fragment>
      <BaseConatiner>
        <AboutUs />
      </BaseConatiner>
    </React.Fragment>
  );
}
