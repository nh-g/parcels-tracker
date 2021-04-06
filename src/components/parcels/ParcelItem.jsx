import {Link} from "react-router-dom";

import StatusIcon from "./StatusIcon";
import StatusOnText from "./StatusOnText";
import Date from "../Date"

export default function ParcelItem({parcel}) {
  return (
    <Link to={`/parcel/${parcel.parcel_id}`}>
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
    </Link>
  );
}

