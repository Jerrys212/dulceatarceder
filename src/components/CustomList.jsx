import { useNavigate } from "react-router-dom";
import {
  ChecklistIcon,
  ExpandLess,
  ExpandMore,
  ListItemButton,
  ListItemIcon,
  Collapse,
  ListItemText,
  List,
  PaidIcon,
} from "../exports";

const CustomList = ({ primary, subItems, open, onAccordionClick }) => {
  const navigate = useNavigate();

  return (
    <>
      <ListItemButton onClick={onAccordionClick}>
        <ListItemIcon>
          <ChecklistIcon />
        </ListItemIcon>
        <ListItemText primary={primary} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subItems.map((subItem, index) => (
            <ListItemButton key={index} onClick={() => navigate(subItem)}>
              <ListItemIcon>
                <PaidIcon />
              </ListItemIcon>
              <ListItemText primary={subItem} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default CustomList;
