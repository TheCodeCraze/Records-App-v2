import React, { Component } from "react";

export default class DetailsRow extends Component {
  render = () => {
    const { data, checked, select } = this.props;
    return (
      <tr className="details-row">
        <td>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => {
              select(data);
            }}
          />
        </td>
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
