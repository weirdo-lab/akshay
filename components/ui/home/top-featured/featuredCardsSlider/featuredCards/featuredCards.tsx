import React from "react";
import { Box, Button,useTheme, useMediaQuery, Hidden } from "@material-ui/core";

export default function FeaturedCards(props) {
  const theme = useTheme();
  const ltxs = useMediaQuery(theme.breakpoints.down("xs"));
  const ltsm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <Box
        display="flex"
        px={ltxs ? 0 : 2}
        py={2}
      >
        <div className="tb-width--full tb-border--r12">
          <Box className="tb-position--relative" display="flex">
            <div className="tb-width--full tb-height--146">
              <img
                src={"assets/img/"+ props.data.image +".jpg"}
                className="tb-image tb-image--cover app-radius-top-corner"
                alt=""
              />
            </div>
            <Box
              className="tb-position--absolute tb-width--full app-overlay-no-radius app-position-absolute-bottom-4 tb-padding--8-20"
              display="flex"
              px={2}
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <h5 className="tb-color--white tb-typo--h4 tb-font-weight--medium">
               {props.data.title}
              </h5>
            </Box>
          </Box>
        <div className="app-bordered--grey tb-color-bg--grey-100 app-radius-bottom-corner">
          <p className="tb-typo--body1 tb-height--146 tb-font-weight--normal tb-color--grey-500 tb-padding--12-20">
            {props.data.description}
          </p>
          <div className="tb-padding--8"></div>
        </div>
        </div>
      </Box>
    </React.Fragment>
  );
}
