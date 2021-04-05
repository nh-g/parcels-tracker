// // NPM package
// import { Link } from "react-router-dom";
// import { useRecoilValue } from "recoil";

// // Project files
// import { parcelState } from "../components/state/parcelState";
// import ParcelCard from "../components/parcels/ParcelCard";

// export default function Parcel({ match }) {
//   // Global state
//   const parcels = useRecoilValue(parcelState);

//   // Constants
//   const routerID = match.params.id;
//   const matchedParcel = parcels.find((item) => item.parcel_id === routerID);

//   return (
//     <div id="parcel" className="container">
//       <h1>Parcel details</h1>
//       <div className="parcel-details">
//         <ParcelCard key={matchedParcel.id} parcel={matchedParcel} />
//       </div>
//       <Link className="back-to-list" to="/home">
//         ⬅ Back to all parcels
//       </Link>
//     </div>
//   );
// }
