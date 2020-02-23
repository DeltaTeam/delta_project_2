import React, { Component } from "react";

// import ListItem from "./ListItem";
import ListShortcut from "./listShortcut/ListShortcut";

const testData = [{ date: '2020-02-02', comment: 'OlalaPapapa', place: 'Vin', files: `[JSON.stringify(newImgs)]` }]

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Array(testData),
      chosed: false
    };
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
    this.setState({
      data: newData
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
                choose={this.chosedItem.bind(this)} />
            )
          })
        }
      </div>
    )
  }
}

export default List;
