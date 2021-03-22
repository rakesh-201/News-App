import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item className={{ borderColor: "red" }}>
            <InputBase />
          </Grid>
          <Grid item className={{ borderColor: "black" }}>
            <IconButton>
              <Badge>
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge>
                <ChatBubbleOutlineIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge>
                <PowerSettingsNewIcon />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
