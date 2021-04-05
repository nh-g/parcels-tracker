import {Link, NavLink} from "react-router-dom";

import ParcelList from "./ParcelList";
import StatusIcon from "./StatusIcon";
import StatusOnText from "./StatusOnText";
import Date from "../Date"

export default function ParcelItem({parcel}) {
  return (
    <NavLink to={`/parcel/${parcel.parcel_id}`}>
      <div className="parcel item">
        <div className="left">
          <StatusIcon orderStatus={parcel.status} />
        </div>
        <div className="right">
          <h2>{parcel.sender}</h2>
          <StatusOnText orderStatus={parcel.status}/> 
          <Date dateString={parcel.eta}/>
        </div>
      </div>
    </NavLink>
  );
}

