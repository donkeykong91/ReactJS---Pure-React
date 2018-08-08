import "../stylesheets/ui.scss";

import { MdTerrain } from "react-icons/md";

import { TiWeatherSnow } from "react-icons/ti";

import { FaCalendarAlt } from "react-icons/fa";

import { PropTypes } from "react";


const percentToDecimal = function (decimal) {

  return ((decimal * 100) + "%");

};


const calcGoalProgress = function (total, goal) {

  return percentToDecimal(total/goal);

};


export const SkiDayCount = function ( { total=70,

                                        powder=20,

                                        backcountry=10,

                                        goal=100 } = {} ) {

  return (

            (


              <div className="ski-day-count">


                <div className="total-days">


                  <span>

                    {total}

                  </span>

                  <FaCalendarAlt />

                  <span>

                    days

                  </span>


                </div>


                <div className="powder-days">


                  <span>

                    {powder}

                  </span>

                  <TiWeatherSnow />

                  <span>

                    days

                  </span>


                </div>


                <div className="backcountry-days">


                  <span>

                    {backcountry}

                  </span>

                  <MdTerrain />

                  <span>

                    days

                  </span>


                </div>


                <div>

                  <span>

                    {calcGoalProgress(total, goal)}

                  </span>

                </div>


              </div>


            )

  );

};



SkiDayCount.propTypes = {


  total: PropTypes.number,

  powder: PropTypes.number,

  backcountry: PropTypes.number,

  goal: PropTypes.number

}
