import { MdTerrain } from "react-icons/md";

import { TiWeatherSnow } from "react-icons/ti";

import { FaCalendarAlt } from "react-icons/fa";


export const SkiDayRow = function ({resort, date, powder, backcountry }) {

  return (

    <tr>


      <td>

        {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}

      </td>

      <td>

        {resort}

      </td>

      <td>

        {(powder) ? <TiWeatherSnow /> : null}

      </td>

      <td>

        {(backcountry) ? <MdTerrain /> : null}

      </td>


    </tr>

  );

};
