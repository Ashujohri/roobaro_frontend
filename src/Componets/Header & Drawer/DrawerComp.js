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

export default function DrawerComp({ links }) {
  const [open, setOpen] = useState(false);
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
          {links.map((link, index) => (
            <ListItemButton key={index} divider onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItemText
                  sx={{
                    marginLeft: 1,
                    fontFamily: "Poppins",
                    color: "black",
                    fontSize: 20,
                    fontWeight: 500,
                  }}
                >
                  {link}
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
