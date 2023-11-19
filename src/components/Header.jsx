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
import CustomList from "./CustomList";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navigate = useNavigate();

  const [openAccordion, setOpenAccordion] = useState("");

  const handleAccordionClick = (accordion) => {
    setOpenAccordion((prev) => (prev === accordion ? "" : accordion));
  };

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
            <CustomList
              primary="Ordenes"
              subItems={["Opción 1", "Opción 2", "Opción 3"]}
              open={openAccordion === "Ordenes"}
              onAccordionClick={() => handleAccordionClick("Ordenes")}
            />
            <CustomList
              primary="Ventas"
              subItems={["Opción 1", "Opción 2", "Opción 3"]}
              open={openAccordion === "Ventas"}
              onAccordionClick={() => handleAccordionClick("Ventas")}
            />
            <CustomList
              primary="Productos"
              subItems={["Opción 1", "Opción 2", "Opción 3"]}
              open={openAccordion === "Productos"}
              onAccordionClick={() => handleAccordionClick("Productos")}
            />
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
