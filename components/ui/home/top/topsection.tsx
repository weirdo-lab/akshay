import React from "react";
import { Box, Hidden } from "@material-ui/core";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function TopSection() {
  const theme = useTheme();
  const ltmd = useMediaQuery(theme.breakpoints.down("md"));
  const ltxs = useMediaQuery(theme.breakpoints.down("xs"));
  const ltsm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={ltxs ? "" : "tb-padding--12"}>
      <div className="tb-container--large-extra">
        <div className={ltxs ? "tb-padding--36" : "tb-padding--10"}></div>
        <Box
          display="flex"
          flexDirection={ltxs ? "column" : "row"}
          py={ltxs ? 0 : 4}
          px={ltxs ? 0 : 3}
        >
          <Box
            display="flex"
            flexBasis={"60%"}
            flexDirection="column"
            justifyContent="center"
          >
            <div className={ltxs ? "tb-padding--16" : ""}>
              <h3 className="tb-typo--h1 tb-color--gre-900 tb-font-weight--medium">
                ABC Interrnational Courier Service
              </h3>
              <div className="tb-padding--2"></div>

              <h5 className="tb-typo--h4 tb-color--gre-900  tb-font-weight--normal">
                Quality & reliable service for on-time delivery
              </h5>
            </div>
            <div className={ltsm ? "tb-padding--8" : "tb-padding--12"}></div>
            <Hidden smUp>
              <div className="tb-padding--8"></div>
              <Box display="flex" flexWrap="wrap">
                {[
                  "Air cargo",
                  "Sea cargo",
                  " Train cargo",
                  "Surface transport",
                  " Packaging solutions",
                  "and More.."
                ].map((item, index) => (
                  <Box key={index} display="flex" p={1}>
                    <div className="tb-color-bg--grey-100 tb-border--r24">
                      <p className="tb-typo--h5 tb-font-weight--normal tb-padding--8-12 tb-color--grey-700">
                        {item}
                      </p>
                    </div>
                  </Box>
                ))}
              </Box>
            </Hidden>
            <Hidden xsDown>
              <div className={ltsm ? "tb-padding--8" : "tb-padding--8"}></div>
              <Box
                className="tb-width--full"
                display="flex"
                flexDirection={ltmd ? "column" : "column"}
                justifyContent="flex-start"
                alignItems={ltmd ? "flex-start" : "flex-start"}
                py={1}
              >
                <p className="tb-typo--h4 tb-color--gre-900 tb-font-weight--medium">
                  Services :{" "}
                </p>
                <Box display="flex" flexWrap="wrap">
                  {[
                    "Air cargo",
                    "Sea cargo",
                    " Train cargo",
                    "Surface transport",
                    " Packaging solutions",
                    "and More.."
                  ].map((item, index) => (
                    <Box key={index} display="flex" p={1}>
                      <p className="tb-typo--h5 tb-font-weight--normal tb-color--blue-500">
                        {item}
                      </p>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Hidden>
          </Box>
          <div className={ltxs ? "" : "tb-flex tb-padding--36"}></div>
          <Box
            display="flex"
            flexBasis={"40%"}
            className={ltxs ? "tb-height--186" : ""}
            flexDirection="column"
            alignItems="center"
          >
            <img src="assets/img/infograph.png" className="tb-image" alt="" />
          </Box>
        </Box>
      </div>
    </div>
  );
}
