import React, { Component } from "react";
import Router from "next/router";
import BaseConatiner from "../container/container";
import { useTheme, Typography, Box } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Contactus from "../components/ui/contact-us/contactus";

export default function ContactUsContainer() {
  return (
    <React.Fragment>
      <BaseConatiner>
        <Contactus />
      </BaseConatiner>
    </React.Fragment>
  );
}
