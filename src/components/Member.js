import { FaShieldAlt } from "react-icons/fa";

import { Component } from "react";


class Member extends Component {

  componentWillMount() {

    this.style = {

      backgroundColor: "gray"

    }

  }

  render() {

    const {

      name,

      thumbnail,

      email,

      admin,

      makeAdmin

    } = this.props || {};


    return (

      <div className="member" style={this.style}>


        <h1>

          {name}

          {(admin) ? <FaShieldAlt /> : null}

        </h1>


        <img src={thumbnail} alt="profile picture"/>


        <p>

          <a href={`mailto:${email}`}>

            {email}

          </a>

        </p>


        <a onClick={makeAdmin}>

          Make Admin

        </a>


      </div>

    );

  }

}


export default Member;
