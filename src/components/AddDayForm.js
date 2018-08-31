import { PropTypes, Component } from "react";

export class AddDayForm extends Component {

  render() {

    return (

      <form className="add-day-form">


        <input id="resort" type="text" required/>

        <input id="date" type="date" required/>

        <input id="powder" type="checkbox" required/>

        <input id="backcountry" type="checkbox" required/>


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
