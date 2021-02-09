import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

//Material UI
//npmjs
//CSS
//Images
//Components

export default function Login() {
    const classes = useStyles();
    return (
    <div>
        <Link to="/">
          Home
        </Link>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
}));