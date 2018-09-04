import React from "react";

import { render } from "react-dom";

import MemberList from "./components/MemberList";

// import "./stylesheets/ui.scss";
//
// import "./stylesheets/index.scss";
//
// import { App } from "./components/App";
//
// import { Whoops404 } from "./components/Whoops404";
//
// import { Router, Route, hashHistory } from "react-router";


window.React = React;


render(

  <MemberList />,

  document.getElementById("react-container")

);
