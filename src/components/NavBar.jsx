import { useState } from "react";
import Image from 'next/image';
import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
// import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
  return (
    <AppBar className="bg-regal-blue">
          <Toolbar>
          <Image src="/java-icon.png" alt="java" width="64" height="60" />
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Maha Easy Code
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" sx={{
    ":hover": {
      bgcolor: "#c6dee7",
      color: "#030704"
    }
  }}>Core Java Topics</Button>
          {/* <Button
            color="inherit"
            id="resources-btn"
            onClick={handleClick}
            aria-control={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDownIcon />}>
            Resources
          </Button> */}
          <Avatar sx={{ bgcolor: "primary.light" }}>M</Avatar>
        </Stack>
        {/* <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{ "aria-labelledby": "resources-button" }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}>
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Product</MenuItem>
        </Menu> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;