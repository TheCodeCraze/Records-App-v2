import React, { Component } from "react";

export default class SelectedRow extends Component {
  render = () => {
    const { data } = this.props;
    return (
      <tr className="selected-row">
        <td>
          <p>{data.title}</p>
        </td>
        <td>
          <p>{data.userId}</p>
        </td>
        <td>
          <p>{data.body}</p>
        </td>
      </tr>
    );
  };
}
