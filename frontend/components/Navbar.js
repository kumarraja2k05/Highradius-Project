import React from "react";
import { Box, ImageListItem } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#384552",
      }}
    >
      <ImageListItem sx={{ width: 260 }}>
        <img src={require("../images/ABCLogo.png")} alt={"ABC Products"} />
      </ImageListItem>
      <ImageListItem sx={{ height: 24, width: 250, marginLeft: 30 }}>
        <img
          src={require("../images/highradius-logo.png")}
          alt={"High Radius"}
        />
      </ImageListItem>
      <h3 style={{ color: "white", marginLeft: 5 }}>Invoice List</h3>
    </Box>
  );
};

export default Navbar;
