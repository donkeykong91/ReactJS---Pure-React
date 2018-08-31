import { PropTypes, Component } from "react";

export class AddDayForm extends Component {

  render() {

    return (

      <form className="add-day-form">


        <label htmlFor="resort">

          Resort Name

        </label>

        <input id="resort" type="text" required/>


        <label htmlFor="date">

          Date

        </label>

        <input id="date" type="date" required/>


        <div>

          <input id="powder" type="checkbox" required/>

          <label htmlFor="powder">

            Powder Day

          </label>

        </div>


        <div>

          <input id="backcountry" type="checkbox" required/>

          <label htmlFor="backcountry">

            Backcountry Day

          </label>

        </div>


      </form>

    );

  }

}

AddDayForm.propTypes = {

  resort: PropTypes.string.isRequired,

  date: PropTypes.string.isRequired,

  powder: PropTypes.bool.isRequired,

  backcountry: PropTypes.bool.isRequired

}
