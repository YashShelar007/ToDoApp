import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" className="title">
            Todo List
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
