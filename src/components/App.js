import React, { Component } from "react";
import Header from "./Header";
import DetailsRow from "./DetailsRow";
import SelectedRow from "./SelectedRow";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      posts: [],
      selected: [],
      totalCount: 0,
    };
  }

  async componentDidMount() {
    try {
      const [res1, res2] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/albums"),
        fetch("https://jsonplaceholder.typicode.com/posts "),
      ]);

      const data1 = await res1.json();
      const data2 = await res2.json();

      this.setState({
        albums: data1,
        posts: data2,
      });
    } catch (err) {
      console.log(err);
    }
  }

  getDetails = () => {
    return this.state.posts.map((item) => {
      const album = this.state.albums.find((album) => album.id === item.id);
      return {
        id: album.id,
        userId: album.userId,
        title: album.title,
        body: item.body,
      };
    });
  };

  selectRow = (item) => {
    if (this.state.selected.some((sel) => sel.id === item.id)) {
      this.setState((prev) => {
        return {
          selected: prev.selected.filter((sel) => sel.id !== item.id),
        };
      });
    } else {
      if (this.state.selected.length !== this.state.totalCount) {
        this.setState((prev) => {
          return {
            selected: [...prev.selected, item],
          };
        });
      }
    }
  };

  setTotalCount = (count) => {
    this.setState({
      totalCount: count,
    });
  };

  render = () => {
    return (
      <>
        <Header setTotalCount={this.setTotalCount} />
        <div className="container">
          <div className="details-container">
            <table className="details-table">
              <tbody>
                {this.getDetails().map((item) => {
                  const sel = this.state.selected.find(
                    (sel) => sel.id === item.id
                  );
                  return (
                    <DetailsRow
                      key={item.id}
                      data={item}
                      checked={sel ? true : false}
                      select={this.selectRow}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="selected-container">
            <table className="selected-table">
              <tbody>
                {this.state.selected.map((item) => {
                  return <SelectedRow key={item.id} data={item} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };
}
