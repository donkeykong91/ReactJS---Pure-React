import { MdTerrain } from "react-icons/md";

import { TiWeatherSnow } from "react-icons/ti";

import { FaCalendarAlt } from "react-icons/fa";

import { SkiDayRow } from "./SkiDayRow";

import { PropTypes } from "react";

import { Link } from "react-router";


export const SkiDayList = function ({days, filter}) {

  const filteredDays = (!filter ||

  !filter.match(/powder|backcountry/)) ?

  days:

  days.filter(function (day) {

    return day[filter];

  });


  return (

    <div className="ski-day-list">

      <table>

      <thead>

        <tr>


          <th>

            Date

          </th>

          <th>

            Resort

          </th>

          <th>

            Powder

          </th>

          <th>

            Backcountry

          </th>


        </tr>

        <tr>

          <td colSpan={4}>


            <Link to="/list-days">

              All Days

            </Link>

            <Link to="/list-days/powder">

              Powder Days

            </Link>

            <Link to="/list-days/backcountry">

              Backcountry Days

            </Link>


          </td>

        </tr>

      </thead>

      <tbody>

        {filteredDays.map( function (day, index) {


                    return (


                      <SkiDayRow


                        key={index}

                        {...day}


                      />


                    );

                }

            )

        }

      </tbody>

      </table>

    </div>

  );

}


SkiDayList.propTypes = {

  days: function(props) {

    if (!Array.isArray(props.days)) {

      return new Error(

        "SkiDayList should be an array"

      );

    } else if (!props.days.length) {

      return new Error(

        "SkyDayList must have at least one record"

      );

    } else {

      return null;

    }

  }

}
