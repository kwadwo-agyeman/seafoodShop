import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { Badge } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import "./sidebar.css";

export default function Sidebar(props) {
  const isMobile = useMediaQuery("(max-width:600px)");

  const list = () => (
    <Box
      sx={{ width: "70vw", padding: "30px" }}
      role="presentation"
      onClick={props.toggleDrawer(false)}
    >
      <article className="logo">
        <h2>MUSTACHE</h2>
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

        <article
          className="icon"
          style={{ display: "flex", alignItems: "center" }}
        >
          <PersonIcon className="icon" />
          <h3>login</h3>
        </article>
      </article>

      <article className="sidebar--menu--tab--container">
        <article className="sidebar--menu--tab">
          <h2>Menu</h2>
          <MenuOutlined />
        </article>

        {/* *********** nav--links ************ */}
        <article className="sidebar--nav--container">
          <ul className="sidebar--nav--links">
            <li>HOME</li>
            <li>SHOP</li>
            <li>BLOG</li>
            <li>CONTACT</li>
          </ul>
        </article>
      </article>
    </Box>
  );

  if (!isMobile) {
    return null;
  }

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor={"left"}
          open={props.state}
          onClose={props.toggleDrawer(false)}
          onOpen={props.toggleDrawer(true)}
          sx={{
            ".MuiDrawer-paper": {
              zIndex: "auto",
              transition: "transform 0.3s ease-in-out",
            },
          }}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
