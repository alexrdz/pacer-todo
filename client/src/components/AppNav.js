import React, { Component } from "react";

class AppNav extends Component {
  state = {
    add: true,
    addItemText: 'Add Item',
    cancelText: 'Cancel'
  };

  toggleAdd = () => {
    this.setState(() => ({add: !this.state.add}))
    this.props.toggleForm();
  };


  render() {
    const spinClass = this.state.add ? '' : ' spin';

    return (
      <div className="row border-top border-bottom col-sm-6 mx-auto mb-4">
        <div className="col-6 text-center border-right p-4">
          <a href="#" className="text-uppercase font-weight-bold cursor-pointer">
            <svg
              className="d-block mx-auto my-2"
              width="34"
              height="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.146 10.386h24.679a2.175 2.175 0 1 1 0 4.35H7.558l6.312 6.312a2.175 2.175 0 1 1-3.076 3.075L.688 14.017a2.165 2.165 0 0 1-.592-1.096 2.175 2.175 0 0 1 .541-2.177L10.744.637a2.175 2.175 0 0 1 3.075 3.076l-6.673 6.673z"
                fill="#50E3C2"
                fillRule="evenodd"
              />
            </svg>
            Goals
          </a>
        </div>
        <div className="col-6 text-center p-4">
          <a onClick={this.toggleAdd} className="text-uppercase font-weight-bold cursor-pointer">
            <svg
              className={`d-block mx-auto my-2` + spinClass}
              width="22"
              height="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.587 8.38h5.758a2.519 2.519 0 1 1 0 5.038h-5.758v5.927a2.519 2.519 0 0 1-5.038 0v-5.927H2.792a2.519 2.519 0 1 1 0-5.038h5.757V2.792a2.519 2.519 0 0 1 5.038 0V8.38z"
                fill="#50E3C2"
                fillRule="evenodd"
              />
            </svg>
            {this.state.add ? this.state.addItemText : this.state.cancelText}
          </a>
        </div>
      </div>
    );
  }
}

export default AppNav;
