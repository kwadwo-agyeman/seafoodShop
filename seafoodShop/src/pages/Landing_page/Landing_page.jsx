import React, { useState } from "react";
import { Badge, Box, Typography, styled } from "@mui/material";
import "./landing_page.css";
import MenuTab from "../../components/MenuTab/MenuTab";
import bannerImage1 from "../../assets/seafoodBanner1.jpg";
import Swiper_Slide from "../../components/Swiper/Swiper";
import Navbar from "../../components/Navbar/Navbar";
import { featuredItemsArr as ftFoodArray } from "./landing_page";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import BBanner from "./BBanner";

const Landing_page = () => {
  const [featuredItemsArr, setFeaturedItemsArr] = useState(ftFoodArray);
  //   --------- Toggle Sidebar appearance
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  //   -------------- filtered featured food Items
  const filterFtFood = (e) => {
    const id = e.target.id;

    const btns = document.querySelectorAll(".top--picks--btn");
    console.log(btns);
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    const activeBtn = document.getElementById(id);
    activeBtn.classList.add('active');

    if (id === "all") {
      setFeaturedItemsArr(ftFoodArray);
    } else {
      const filteredArr = ftFoodArray.filter((item) => item.category === id);
      setFeaturedItemsArr(filteredArr);
    }
  };
  return (
    <div className="landing--page--container">
      {/* ----------- HEADER/NAVBAR ------------- */}
      <Box>
        <Navbar state={state} setState={setState} toggleDrawer={toggleDrawer} />
      </Box>
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

      {/* *********** MIDDLE SLIDER/FEATURED ITEMS *********** */}
      <Box className="favorite--meals">
        <Swiper_Slide />
      </Box>

      {/* ************ BOTTOM /TOP PICKS ************** */}
      <Box>
        {/* ******** title ******** */}
        <Box className="section--title">
          <Typography
            variant="h5"
            className="section--title--text"
            sx={{ fontWeight: 700 }}
          >
            Featured Items
          </Typography>
        </Box>

        {/* ********* tabs ********* */}
        <Box className="top--picks--container">
          <Box
            className="top--picks--btns--container"
            sx={{
              width: { xs: "80vw", sm: "70vw" },
              margin: { xs: 0, sm: "0 auto" },
              mt: "60px",
            }}
          >
            <ul className="top--picks--btns" onClick={filterFtFood}>
              <li className="top--picks--btn active" id="all">
                All
              </li>
              <li className="top--picks--btn" id="breakfast">
                Breakfast
              </li>
              <li className="top--picks--btn" id="lunch">
                Lunch
              </li>
            </ul>
          </Box>

          {/* ******* Featured Food Items******** */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(3,1fr)" },
              gap: "2rem",
              mt: "50px",
            }}
          >
            {featuredItemsArr &&
              featuredItemsArr.map((foodItem, index) => {
                return (
                  <Box key={index}>
                    <div className="foodImg--container">
                      <img src={foodItem.img} alt={foodItem.name} />

                      <div className="content--top">
                        <h3>{foodItem.name}</h3>
                        <span>{`$ ${foodItem.price.toFixed(2)}`}</span>
                      </div>

                      <div className="content--bottom">
                        <article className="icon">
                          <ShoppingBagOutlinedIcon />
                        </article>
                        <article className="icon">
                          <FavoriteOutlinedIcon />
                        </article>
                      </div>
                    </div>
                  </Box>
                );
              })}
          </Box>
        </Box>
      </Box>

      <Box>
        <BBanner/>
      </Box>
    </div>
  );
};

export default Landing_page;
