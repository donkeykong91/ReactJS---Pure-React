import { PropTypes, Component } from "react";

const tahoeResorts = [

  "Alpine Meadows",

  "Boreal",

  "Diamond Peak",

  "Donner Ski Ranch",

  "Heavenly",

  "Homewood",

  "Kirkwood",

  "Mt. Rose",

  "Northstar",

  "Squaw Valley",

  "Sugar Bowl"

];

class Autocomplete extends Component {

  get value() {

    return this.refs.inputResort.value;

  }

  set value(inputValue) {

    this.refs.inputResort.value = inputValue;

  }

  render() {

    return (

      <div>

        <input ref="inputResort" type="text" list="tahoe-resorts" />

        <datalist id="tahoe-resorts">

          {this.props.options.map( function (option, index) {

              return (

                <option key={index}>

                  {option}

                </option>

              );

            }

          )}

        </datalist>

      </div>

    );

  }

}

export const AddDayForm = function ({ resort,

                                      date,

                                      powder,

                                      backcountry,

                                      onNewDay} = {}) {

  {let _resort;

   let _date;

   let _powder;

   let _backcountry;


    const submit = function (e) {

      e.preventDefault();

      onNewDay({resort: _resort.value,

                date: _date.value,

                powder: _powder.checked,

                backcountry: _backcountry.checked
              });

      _resort.value = "";

      _date.value = "";

      _powder.checked = false;

      _backcountry.checked = false;

    };


    return (

      <form onSubmit={submit} className="add-day-form">


        <label htmlFor="resort">

          Resort Name

        </label>

        <Autocomplete

               options={tahoeResorts}

               ref={function (input) {

                 _resort = input;

                 return _resort;

               }}

        />


        <label htmlFor="date">

          Date

        </label>

        <input id="date"

               type="date"

               required

               defaultValue={date}

               ref={function (input) {

                 _date = input;

                 return _date;

               }}

        />


        <div>

          <input id="powder"

                 type="checkbox"

                 defaultChecked={powder}

                 ref={function (input) {

                   _powder = input;

                   return _powder;

                 }}

          />

          <label htmlFor="powder">

            Powder Day

          </label>

        </div>


        <div>

          <input id="backcountry"

                 type="checkbox"

                 defaultChecked={backcountry}

                 ref={function (input) {

                   _backcountry = input;

                   return _backcountry;

                 }}

          />

          <label htmlFor="backcountry">

            Backcountry Day

          </label>

        </div>

        <button>

          Add Day

        </button>

      </form>

    );

  }

}


AddDayForm.defaultProps = {

  resort: "Kirkwood",

  date: "2017-02-12",

  powder: true,

  backcountry: false

}


AddDayForm.propTypes = {

  resort: PropTypes.string.isRequired,

  date: PropTypes.string.isRequired,

  powder: PropTypes.bool.isRequired,

  backcountry: PropTypes.bool.isRequired

}
