import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  sidebar: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000033",
    height: "100vh",
    width: "320px",
    flex: 1,
    position: "absolute",
  },
});

const SideBar = () => {
  const { sidebar } = useStyles();

  return <div className={sidebar}></div>;
};

export default SideBar;
