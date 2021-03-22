import React from "react";
import "./App.css";
import SideBar from "./Components/SideBar";
import NavBar from "./Components/NavBar";
import { CssBaseline, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  appBar: {
    width: "100%",
    paddingLeft: "320px",
  },
});

function App() {
  const { appBar } = useStyles();

  return (
    <>
      <SideBar />
      <div className={appBar}>
        <NavBar />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
