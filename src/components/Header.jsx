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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            My App
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <div style={{ width: "250px" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <CloseIcon />
          </IconButton>
          <List>
            <ListItem>
              <ListItemIcon>
                {/* Agrega un ícono aquí si es necesario */}
              </ListItemIcon>
              <ListItemText primary="Opción 1" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                {/* Agrega un ícono aquí si es necesario */}
              </ListItemIcon>
              <ListItemText primary="Opción 2" />
            </ListItem>
            {/* Agregar más elementos ListItem según sea necesario */}
          </List>
        </div>
      </Drawer>

      {/* Contenido de la página */}
      <div>{/* Agregar contenido aquí */}</div>
    </div>
  );
};

export default Header;
