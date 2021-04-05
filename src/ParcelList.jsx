import React from "react";

import axios from "axios";

export default class ParcelList extends React.Component {
  state = {
    parcels: [],
  };

  componentDidMount() {
    axios
      .get(`https://my.api.mockaroo.com/orders.json?key=e49e6840`)
      .then((res) => {
        const parcels = res.data;
        this.setState({ parcels });
      });
  }

  render() {
    return (
      <ul>
        {this.state.parcels.map((parcel) => (
          <li>{parcel.name}</li>
        ))}
      </ul>
    );
  }
}
