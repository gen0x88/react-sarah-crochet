import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: require("../img/octopus 2.jpg"), caption: "Octopus: $12 each" },
  { src: require("../img/milk 4.jpg"), caption: "Milk Cartons $6 each" },
  { src: require("../img/duck.jpg"), caption: "Ducks" },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: 10,
        top: "50%",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: 10,
        top: "50%",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export default function HomePage() {
  return (
    <Box sx={{ maxWidth: 800, margin: "auto", mt: 4 }}>
      <Slider {...settings}>
        {images.map((item, index) => (
          <Box key={index} sx={{ position: "relative" }}>
            <img
              src={item.src}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                bottom: 16,
                left: 16,
                color: "#fff",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "4px 8px",
                borderRadius: 4,
              }}
            >
              {item.caption}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
