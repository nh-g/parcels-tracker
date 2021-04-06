// NPM package
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

// Project files
import { parcelState } from "../state/parcelState";
import ParcelCard from "../components/parcels/ParcelCard";

export default function Parcel({ match }) {
  // Global state
  const parcels = useRecoilValue(parcelState);
  // Constants
  const routerID = match.params.id;
  const matchedParcel = parcels.find((item) => item.parcel_id === routerID);

  if (!matchedParcel) {
    return (
      <div>
        <br />
        <h2> Not Found. </h2>⬅ Browser back to the list of all parcels.
      </div>
    );
  }
  return (
    <div id="parcel" className="container">
      <div className="back-to-list">
        <Link to="/"> ＜</Link>
      </div>
      <div className="parcel-details">
        <ParcelCard key={matchedParcel.id} parcel={matchedParcel} />
      </div>
      <br />
      <Link className="back-to-list" to="/">
        ⬅ Back to all parcels
      </Link>
      <br />
    </div>
  );
}
