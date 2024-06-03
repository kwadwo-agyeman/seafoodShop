import React from "react";
import { Badge, Box, Typography, styled } from "@mui/material";
import "./landing_page.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuTab from "../../components/MenuTab/MenuTab";
import bannerImage1 from "../../assets/seafoodBanner1.jpg";
import Swiper_Slide from "../../components/Swiper/Swiper";

const Landing_page = () => {
  const LargeHeader = styled(Box)(({ theme }) => ({
    display: "none",
    marginTop: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const SmallHeader = styled(Box)(({ theme }) => ({
    display: "block",
    marginTop: "15px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <div className="landing--page--container">
      {/* ----------- HEADER ------------- */}
      {/* --------- TOP ---------- */}
      {/* LARGE SCREEN */}
      <LargeHeader className="header--top--container">
        {/* ********* logo ******** */}
        <article className="logo">
          <h3>MUSTACHE</h3>
        </article>

        {/* *********** nav--links ************ */}
        <article className="nav--container">
          <ul className="nav--links">
            <li>HOME</li>
            <li>SHOP</li>
            <li>BLOG</li>
            <li>CONTACT</li>
          </ul>
        </article>

        {/* ********** cart and favorites ********** */}
        <article className="cart--like--container">
          <article className="likes">
            <Badge
              badgeContent={2}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#20BF55",
                  color: "white",
                },
              }}
            >
              <FavoriteOutlinedIcon className="icon" />
            </Badge>
          </article>
          <article className="cart">
            <Badge
              badgeContent={3}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#20BF55",
                  color: "white",
                },
              }}
            >
              <ShoppingBagOutlinedIcon className="icon" />
            </Badge>
          </article>
        </article>
      </LargeHeader>
      {/* SMALL SCREEN */}
      <SmallHeader>
        <article className="header--top--container">
          <article className="logo">
            <h3>MUSTACHE</h3>
          </article>

          <article className="menu">
            <MenuOutlinedIcon className="icon" />
          </article>
        </article>

        {/* ********** cart and favorites ********** */}
        <article className="cart--like--container-sm">
          <article className="likes">
            <Badge
              badgeContent={1}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#20BF55",
                  color: "white",
                },
              }}
            >
              <FavoriteOutlinedIcon className="icon" />
            </Badge>
          </article>
          <article className="cart">
            <Badge
              badgeContent={0}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#20BF55",
                  color: "white",
                },
              }}
            >
              <ShoppingBagOutlinedIcon className="icon" />
            </Badge>
          </article>
        </article>
      </SmallHeader>

      {/* ************* MIDDLE *************** */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 4fr" },
          gap: { xs: 0, sm: "60px" },
          marginTop: "20px",
        }}
      >
        <article className="main--menu--tab">
          <MenuTab />
        </article>
        <Box sx={{ mt: { xs: "30px", sm: "0px" } }} className="banner--1">
          <img className="banner--img--1" src={bannerImage1} alt="image1" />

          <Box className="banner--text1">
            <h5 style={{ fontSize: "18px", color: "yellow" }}>Fresh Sushi</h5>
            <h1 style={{ fontSize: "23px" }}>
              White Ceramic Plate Filled With Sushi
            </h1>
            <article className="banner--btn1">
              <h3>Grab A Bite</h3>
            </article>
          </Box>
        </Box>
      </Box>

      {/* *********** MIDDLE SLIDER *********** */}
      <Box className="favorite--meals">
        <Box className="section--title">
          <Typography variant="h5" className="section--title--text" sx={{fontWeight:700}}>Featured Items</Typography>
        </Box>
        <Swiper_Slide />
      </Box>
    </div>
  );
};

export default Landing_page;
