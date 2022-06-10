import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Add from "./Add";
import Edit from "./Edit";
import RefreshIcon from "@mui/icons-material/Refresh";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
const Buttons = ({ onSubmit, onChange, data }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Box
        sx={{
          marginTop: 2,
        }}
      >
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            sx={{
              color: "white",
              border: 1,
              borderColor: "skyblue",
              backgroundColor: "skyblue",
            }}
          >
            PREDICT
          </Button>
          <Button
            sx={{
              color: "white",
              border: 1,
              borderColor: "skyblue",
            }}
          >
            ANALYTICS VIEW
          </Button>
          <Button
            sx={{
              color: "white",
              border: 1,
              borderColor: "skyblue",
            }}
          >
            ADVANCE SEARCH
          </Button>
        </ButtonGroup>
        <Button variant="outlined" sx={{ marginLeft: 2 }}>
          <RefreshIcon color="white" />
        </Button>

        <Button sx={{ marginLeft: 1, p: "0px" }}>
          <TextField
            label="Search"
            // defaultValue={"Search"}
            color="primary"
            size={"small"}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Button>
      </Box>

      <Box
        sx={{
          marginTop: 2,
        }}
      >
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Add onSubmit={onSubmit} onChange={onChange} data={data} />
          <Edit />
          <Button
            sx={{
              color: "white",
              border: 1,
              borderColor: "skyblue",
            }}
          >
            DELETE
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default Buttons;
