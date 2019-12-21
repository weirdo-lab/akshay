import React from "react";
import { Box, Button,useTheme, useMediaQuery, Hidden } from "@material-ui/core";
import styles from "./topFeaturedStyle";
import { makeStyles, Theme } from "@material-ui/core/styles";
import FeaturedCards from "./featuredCardsSlider/featuredCards/featuredCards";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FeaturedCardSlider from "./featuredCardsSlider/featuredCardSlider";

const useStyles = makeStyles((theme: Theme) => styles(theme));

export default function TopFeatured() {
  const classes = useStyles({});
  const theme = useTheme();
  const ltxs = useMediaQuery(theme.breakpoints.down("xs"));
  const ltsm = useMediaQuery(theme.breakpoints.down("sm"));

  const [city, setCity] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCity(event.target.value as string);
  };

  return (
    <div className="tb-container--large-extra">
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
        <Box display="flex" flexDirection="row" alignItems="center">
        <h3 className="tb-typo--h2 tb-font-weight--medium tb-color--grey--900">Services</h3>
        </Box>
      </Box>
      <div className="tb-padding--12"></div>
      <FeaturedCardSlider />
    </div>
  );
}
