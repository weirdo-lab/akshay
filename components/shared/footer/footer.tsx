import React from "react";
import Link from "next/link";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme
} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Hidden } from "@material-ui/core";


export default function Footer() {
  const theme = useTheme();
  const ltsm = useMediaQuery(theme.breakpoints.down("sm"));
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <React.Fragment>
      <div className="tb-color-bg--black">
        <div className="tb-container--large">
        <div className="tb-padding--20"></div>

        <Grid container direction="row" justify="space-between">
          <Grid className="tb-padding--h-12" item>
            <h1 className="tb-color--white tb-typo--body1 tb-text--align-left tb-font-weight--medium">
              QUICK LINKS
            </h1>
            <div className="tb-padding--8"></div>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Link href="/about-us">
                <a className="tb-color--grey-400 tb-padding--v-4 tb-typo--h5 tb-font-weight--normal">
                  About us
                </a>
              </Link>
              <Link href="/contact-us">
                <a className="tb-color--grey-400 tb-padding--v-4 tb-typo--h5 tb-font-weight--normal">
                  Contact us
                </a>
              </Link>
            </Box>
          </Grid>

          <Grid className="tb-padding--h-12" item>
            <div className={xs ? "tb-padding--12" : ""}></div>
            <h1 className="tb-color--white tb-typo--body1 tb-text--align-left tb-font-weight--medium">
              ADDRESS
            </h1>
            <div className="tb-padding--8"></div>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <p className="tb-color--white tb-width--264 tb-text--align-left tb-typo--h5 tb-font-weight--normal">
                ABC International Couriers Private Limited  Outer Ring Rd, Banashankari 3rd Stage
              </p>
              <p className="tb-color--grey-400 tb-padding--v-4 tb-typo--h5 tb-font-weight--normal">
                Bangalore - 560085, KA, India
              </p>
              <div className="tb-padding--6"></div>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div className="tb-container--stretched">
        <Grid container direction={ltsm ? 'column':'row'} justify="center">
          <Grid className="tb-padding--h-12" item xs>
            <Box display="flex" flexDirection="column">
              <p className="tb-typo--body3 tb-text-align--center tb-color--grey-700">
            Abc International Locgistics
              </p>
              <div className="tb-padding--2"></div>
              <p className="tb-typo--body3 tb-text-align--center tb-color--grey-800">
                Â© 2015 - 2019 Abc International Locgistics Pvt. Ltd. All Rights Reserved.
              </p>
            </Box>
          </Grid>
        </Grid>
        <div className="tb-padding--6"></div>
        <div className={ltsm ? "tb-padding--36" : ""}></div>
        </div>
      </div>
    </React.Fragment>
  );
}
