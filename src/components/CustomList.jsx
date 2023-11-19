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
            <ListItemButton
              key={index}
              onClick={() => console.log("SubItem Clicked:", subItem)}
            >
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
