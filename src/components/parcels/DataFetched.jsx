import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { parcelState } from "../../state/parcelState";

import FetchData from "../FetchData";
import ListParcels from "../../pages/ListParcels"
export default function DataFetched() {
  const [parcels, setParcels] = useRecoilState(parcelState);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  let count = 0;
  useEffect(() => {
    console.log("useEffect", count++);
    FetchData("https://my.api.mockaroo.com/orders.json?key=e49e6840")
      .then((res) => {
        setParcels(res);
        setLoad(true);
      })
      .catch((err) => {
        setError(err);
        setLoad(true);
      });
  }, []);

  if (load) {
    return (
      <ul className="parcel-grid">
        {/* {error ? <li> {error.message} </li> : ParcelsArray} */}
        {error ? <li> {error.message} </li> : <ListParcels parcels = {parcels} />}
      </ul>
    );
  } else {
    return <div> Loading your parcels... </div>;
  }
}
