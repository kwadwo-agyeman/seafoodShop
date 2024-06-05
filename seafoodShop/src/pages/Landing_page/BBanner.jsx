import { Box } from "@mui/material";
import React from "react";
import BannerImg1 from '../../assets/BBanner1.jpg';
import BannerImg2 from '../../assets/BBanner2.jpg'

const BBanner = () => {
  return (
    <div>
      <Box className="banners">
        <article className="banner--container bannerImg1">
          <img src={BannerImg1} alt="" />
        </article>
        <article className="banner--container bannerImg2">
          <img src={BannerImg2} alt="" />
        </article>
      </Box>
    </div>
  );
};

export default BBanner;
