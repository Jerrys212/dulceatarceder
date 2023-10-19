import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  MenuIcon,
  CloseIcon,
  PaidIcon,
  InventoryIcon,
  ChecklistIcon,
} from "../exports/index";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#f4b1bb" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </div>{" "}
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" component="div">
              Dulce Atardecer
            </Typography>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <div style={{ width: "250px" }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <CloseIcon />
          </IconButton>
          <List>
            <ListItem key={"Ordenes"} disablePadding>
              <ListItemButton onClick={() => navigate("/admin/ordenes")}>
                <ListItemIcon>
                  <ChecklistIcon />
                </ListItemIcon>
                <ListItemText primary={"Ordenes"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"Ventas"} disablePadding>
              <ListItemButton onClick={() => navigate("/admin/ventas")}>
                <ListItemIcon>
                  <PaidIcon />
                </ListItemIcon>
                <ListItemText primary={"Ventas"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"Productos"} disablePadding>
              <ListItemButton onClick={() => navigate("/admin/productos")}>
                <ListItemIcon>
                  <InventoryIcon />
                </ListItemIcon>
                <ListItemText primary={"Productos"} />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
