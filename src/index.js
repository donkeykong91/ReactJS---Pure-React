import React from "react";

import { render } from "react-dom";

import { SkiDayCount } from "./components/SkiDayList";


window.React = React;


render(

  <SkiDayList

    days={

      [


        {

          resort: "Squaw Valley",

          date: new Date("1/2/2016"),

          powder: true,

          backcountry: false

        },

        {

          resort: "Kirkwood",

          date: new Date("3/28/2016"),

          powder: false,

          backcountry: false

        },

        {

          resort: "Mt. Tallac",

          date: new Date("4/2/2016"),

          powder: false,

          backcountry: true

        }


      ]

    }

  />,

  document.getElementById("react-container")

);
