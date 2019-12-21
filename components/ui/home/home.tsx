import React from "react";
import { Box, Hidden } from "@material-ui/core";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TopSection from "./top/topsection";
import TopFeatured from "./top-featured/topFeatured";
import Whyus from "./whyus/whyus";
import Footer from "../../shared/footer/footer";

export default function Home() {
  const theme = useTheme();
  const ltmd = useMediaQuery(theme.breakpoints.down("md"));
  const ltxs = useMediaQuery(theme.breakpoints.down("xs"));
  const ltsm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="">
      <Box display="flex" flexDirection="column">
        <TopSection />
        <div className="tb-container--stretched">
        <div className="tb-padding--24"></div>
        <TopFeatured />
        <div className="tb-padding--24"></div>
        <Whyus />
        <div className="tb-padding--24"></div>
        </div>

        <Footer />
      </Box>
    </div>
  );
}
