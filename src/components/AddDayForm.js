import { PropTypes } from "react";

export const AddDayForm = function () {

  return (

    <h1>

      Add a Day

    </h1>

  );

}

AddDayForm.propTypes = {

  resort: PropTypes.string.isRequired,

  date: PropTypes.string.isRequired,

  powder: PropTypes.bool.isRequired,

  backcountry: PropTypes.bool.isRequired

}
