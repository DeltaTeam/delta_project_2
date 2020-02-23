import React, { Component } from "react";

// import ListItem from "./ListItem";
import ListShortcut from "./listShortcut/ListShortcut";
import getData from "./../get"

const testData = [{ date: '2020-02-02', comment: 'OlalaPapapa', place: 'Vin', files: `[JSON.stringify(newImgs)]` }]

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Array(),
      chosed: false
    };
    getData(this.setData.bind(this))
  }

  cleanData() {
    this.setState({
      data: new Array(),
      chosed: false
    })
  }

  chosedItem() {
    this.setState({
      chosed: true
    })
  }

  setData(newData) {
    let res = JSON.parse(newData)
    this.setState({
      data: res
    })
  }

  render() {
    return (
      <div>
        {
          this.state.data.map((value) => {
            return (
              <ListShortcut
                data={value}
                flag={this.state.chosed}
                choose={this.chosedItem.bind(this)}
              />
            )
          })
        }
      </div>
    )
  }
}

export default List;
