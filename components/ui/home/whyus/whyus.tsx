import React from "react";
import { Box,useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Whyus() {
  const theme = useTheme();
  const ltxs = useMediaQuery(theme.breakpoints.down("xs"));
  const ltsm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="tb-container--large-extra">
      <Box display="flex" flexDirection={ltxs ? "column" : "row"} alignItems="center">
          <h3 className="tb-typo--h2 tb-font-weight--medium tb-color--grey-900">Why Choose Us ?</h3>
        <div className={ltxs ? "tb-padding--12" : "tb-flex"}></div>
      </Box>
      <div className={ltxs ? "tb-padding--16" : "tb-padding--24"}></div>
      <Box display="flex" flexWrap="wrap">
        {choice.map((item, index) => (
          <Box display="flex" key={index} flexDirection="column" alignItems="center" flexBasis={ltxs ? "100%" : ltsm ? "48%" : "33.3%"} py={3.5} px={ltxs ? 0 : ltsm ? 2.5 : 1}>
            <div>
              <img src={"assets/svg/" + item.icon + ".svg"} className="tb-icon--40" alt="" />
            </div>
            <p className="tb-typo--h3 tb-padding--v-12 tb-font-weight--medium">
              {item.title}
            </p>
            <p className={ (ltsm ? "" : "tb-padding--right-32") +" "+"tb-typo--h4 tb-text-align--center tb-color--grey-700"}>
              {item.detail}
            </p>
          </Box>
        ))}
      </Box>
    </div>
  );
}

const choice = [
  {
    icon: "exp",
    title: "20 years of Experience",
    detail:
      "Experience definition, a particular instance of personally  a particular instance of personally  a particular instance of personally encountering or undergoing something: My encounter with the bear in the woods was a frightening"
  },
  {
    icon: "quality",
    title: "Quality of Service",
    detail:
      "quality is a general term applicable to any trait or characteristic whether individual or generic. material with a silky quality property implies a characteristic that belongs to a thing's essential nature and may be used to describe a type or species."
  },
  {
    icon: "hand",
    title: "Professional Service",
    detail:
      "We can also offer same day deliveries subject to negation and practicality. In addition to our international air service, we now offer a full European road service to provide you with the best possible service for your money."
  },
  {
    icon: "happy",
    title: "Delighted Clients",
    detail:
      "Small deposits, no investments and the choice of workspaces  workspaces and the choice of workspaces across price bands – find offices for startups, professionals, SMEs and large corporates."
  },
  {
    icon: "fast",
    title: "Fast and Flexible",
    detail:
      "As a reliable next day delivery service for both our boxed and palletised perishable goods deliveries throughout the United Kingdom, Station Couriers has played it's part in assisting with our companies continued expansion and growth."
  },
  {
    icon: "secure",
    title: "SECURE TRANSPORTATION",
    detail:
      "We have a constantly expanding fleet, with four new lorries, two of these being brand new which were added towards the end of 2017. These lorries allow us to operate and increase the amount of deliveries we are able to make each day without decreasing our reliability and speed."
  },
];
