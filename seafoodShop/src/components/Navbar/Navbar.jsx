import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Sidebar from "../Sidebar/Sidebar";
import { Badge, Box, Typography, styled } from "@mui/material";
import './navbar.css';

const Navbar = (props) => {
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

  const SidebarBox = styled(Box)(({ theme }) => ({
    display: "block",
    marginTop: "15px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <div>
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

          <article className="menu" onClick={props.toggleDrawer(true)}>
            <MenuOutlinedIcon className="icon" />
          </article>
        </article>

        {/* ******** SIDEBAR ******** */}
        <SidebarBox>
          <Sidebar
            setState={props.setState}
            state={props.state}
            toggleDrawer={props.toggleDrawer}
          />
        </SidebarBox>

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
              badgeContent={2}
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
    </div>
  );
};

export default Navbar;
