import {Link, NavLink} from "react-router-dom";

import StatusIcon from "./StatusIcon";
import StatusOnText from "./StatusOnText";

export default function ParcelItem({parcel}) {
  return (
    <NavLink to={`/parcel/${parcel.parcel_id}`}>
      <div className="parcel item">
        <div className="left">
          <StatusIcon orderStatus={parcel.status} />
        </div>
        <div className="right">
          <StatusOnText orderStatus={parcel.status} />
        </div>
      </div>
    </NavLink>
  );
}

