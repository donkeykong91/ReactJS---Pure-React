import { MdTerrain } from "react-icons/md";

import { TiWeatherSnow } from "react-icons/ti";

import { FaCalendarAlt } from "react-icons/fa";

import { SkiDayRow } from "./SkiDayRow";


export const SkiDayList = function ({days}) {

  return (


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

      </thead>

      <tbody>

        {days.map( function (day, index) {


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


  );

}
