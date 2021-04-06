import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import FetchData from "../components/FetchData";
import ParcelItem from "../components/parcels/ParcelItem";
import { parcelState } from "../state/parcelState";

export default function ParcelList() {
const [parcels, setParcels] = useRecoilState(parcelState);
const [load, setLoad] = useState(false);
const [error, setError] = useState("");

const ParcelsArray = parcels.map((item) => (
<ParcelItem key={item.id} parcel={item} />
));

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
    <h1>Your Parcels</h1>
    {error ? <li>{error.message}</li> : ParcelsArray}
  </ul>
);
} else {
return <div>Loading...</div>;
}
}
