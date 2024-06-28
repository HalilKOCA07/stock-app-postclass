import React from "react";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EuroIcon from "@mui/icons-material/Euro";
import BusinessIcon from "@mui/icons-material/Business";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { useNavigate } from "react-router-dom";
import useAuthRequest from "../services/useAuthRequest";
import image from "../assets/dashboardListBg.png"
import { useSelector } from "react-redux";

const DashboardList = () => {
  const navigate = useNavigate();

  const icons = [
    {
      title: "Dashboard",
      icon: <DashboardCustomizeIcon />,
      path: "/stock",
    },
    {
      title: "Purchases",
      icon: <ShoppingCartIcon />,
      path: "/stock/purchases",
    },
    {
      title: "Sales",
      icon: <EuroIcon />,
      path: "/stock/sales",
    },
    {
      title: "Firms",
      icon: <BusinessIcon />,
      path: "/stock/firms",
    },
    {
      title: "Brands",
      icon: <BookmarksIcon />,
      path: "/stock/brands",
    },
    {
      title: "Products",
      icon: <Inventory2Icon />,
      path: "/stock/products",
    },
  ];
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {icons.map((item, index) => (
          <ListItem
            key={item.title}
            disablePadding
  
            sx={{
              color: "white", backgroundImage:{image},
              "& .MuiSvgIcon-root": { color: "white" },
              "&:hover": { color: "red" },
              "&:hover .MuiSvgIcon-root": { color: "red" },
            }}
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DashboardList;

//todo **********  NAVLIST  ****************
export const NavList = () => {
  const {user} = useSelector((state) => state.stock)
  const navigate = useNavigate();
  const { logout } = useAuthRequest();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  // const settings = [
  //   { title: "Profile", path: "/stock/profile" },
  //   { title: "Logout" , action:"logout" },
  // ];
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={user.name} src={user.image || user.name} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem key="profile" onClick={() => navigate("/stock/profile")}>
          <Typography textAlign="center">Profile</Typography>
        </MenuItem>
        <MenuItem key="logout" onClick={logout}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
