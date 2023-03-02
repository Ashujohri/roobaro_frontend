import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  ListItemButton,
  ListItemText,
  List,
  ListItemIcon,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { adminRoutes } from "../config/MenuItems";
import { useNavigate } from "react-router-dom";

export default function DrawerComp(props) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleGo = (data) => {
    navigate(`/${data.pathName}`);
  };

  return (
    <>
      <Drawer
        open={open}
        anchor="right"
        PaperProps={{
          sx: { width: 180 },
        }}
        onClose={() => setOpen(false)}
      >
        <List>
          <ListItemButton divider>
            <ListItemIcon>
              <ListItemText>
                <img
                  src="./images/LOGO.svg"
                  alt=""
                  style={{ marginLeft: 2, width: "35%" }}
                ></img>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          {adminRoutes.map((item, index) => (
            <ListItemButton key={index} divider onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItemText
                  sx={{
                    marginLeft: 1,
                    fontFamily: "Poppins",
                    color: "black",
                    fontSize: 20,
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                  onClick={() => handleGo(item)}
                >
                  {item.name}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(!open)}>
        <MenuOutlinedIcon />
      </IconButton>
    </>
  );
}
