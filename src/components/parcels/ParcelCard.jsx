import StatusIcon from "./StatusIcon";
import StatusOnText from "./StatusOnText";
import Date from "../Date";

export default function ParcelCard({ parcel }) {
  return (
    <div className="parcel-details">
      <h1>
        Parcel Details <StatusIcon orderStatus={parcel.status} />
      </h1>
      <div className="parcel-info">
        <p className="data-label">Sender</p>
        <p className="data-content">{parcel.sender}</p>
        <p className="data-label">Status</p>
        <div className="data-content">
          <StatusOnText orderStatus={parcel.status} />
        </div>
        <p className="data-label">Estimated time of arrival</p>
        <Date dateString={parcel.eta} />
        <p className="data-label">Parcel ID</p>
        <p className="data-content">{parcel.parcel_id}</p>
        <p className="data-label">Pickup location</p>
        <p className="data-content">{parcel.location_name}</p>
        <p className="data-label">User phone number</p>
        <p className="data-content">{parcel.user_phone}</p>
        <p className="data-label">Verification required?</p>
        {parcel.verification_required ? (
          <p className="data-content">Yes </p>
        ) : (
          <p className="data-content">No</p>
        )}
        <p className="data-label">Notes</p>
        {parcel.notes != null ? (
          <p className="data-content">{parcel.notes}</p>
        ) : (
          <p className="data-content">None</p>
        )}
        <p className="data-label">Last updated</p>
        <Date dateString={parcel.last_updated} />
      </div>
    </div>
  );
}
