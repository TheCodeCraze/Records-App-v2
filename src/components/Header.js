import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  handleClick = () => {
    this.setState({
      value: "",
    });
  };
  render = () => {
    const { value } = this.state;
    const { setTotalCount } = this.props;
    return (
      <header>
        <input
          type="number"
          className="sel-input"
          placeholder="No. of Records"
          value={value}
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button
          className="sel-btn"
          onClick={() => {
            setTotalCount(parseInt(value));
            this.handleClick();
          }}
        >
          go
        </button>
      </header>
    );
  };
}
