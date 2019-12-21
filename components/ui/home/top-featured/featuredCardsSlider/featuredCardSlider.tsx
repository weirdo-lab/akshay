import { Box } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import FeaturedCards from "./featuredCards/featuredCards";

export default function FeaturedCardSlider(props) {
  const theme = useTheme();
  const ltsm = useMediaQuery(theme.breakpoints.down("sm"));
  const params = {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      breakpoints: {
        1920: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1224: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        989: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 2
        },
        260: {
          slidesPerView: 1,
          spaceBetween: 2
        },
  
        centeredSlides: true
      },

  };

  return (
    <React.Fragment>
      <div className={ltsm ? "tb-padding--12" : ""}></div>

      <div className={ltsm ? "slider" : "slider"}>
        <Swiper {...params}>
          {services.map((item, index) => (
            <Box display="flex" flexDirection="column" key={index}>
              <Box display="flex" alignSelf="center">
                <FeaturedCards data={item} />
              </Box>
            </Box>
          ))}
        </Swiper>
      </div>
    </React.Fragment>
  );
}

const services = [
  {
    title: "Air Cargo",
    description:
      "A Single Window” concept. Company is familiar with the most diverse branches of the industry and provides logistics expertise for any product, anywhere, anytime.",
    image: "air"
  },
  {
    title: "Sea Cargo",
    description:
      "We offer just what you need – competitive rates, a choice of transit times and scheduled sailing options, with a full range of value-added services",
    image: "sea"
  },
  {
    title: "Train Cargo",
    description:
      "Enriched with vast industrial practice, we are involved in offering Surface Transportation Services. ",
    image: "train"
  },
  {
    title: "Surface Transport",
    image: "surface",
    description:
      "With a fleet of more than 200 vehicles of all types, small, medium and large, we can accommodate all your transport requirements"
  },
  {
    title: "Packaging Solutions",
    image: "packaging",
    description:
      "We are in the business of relocation for around 20 years, engaged in all phases of relocation. We have a wide network of branches and godowns all across the country and worldwide. We have our fleet of vehicles to suit your requirements from small LCVs to big covered containers."
  }
];
