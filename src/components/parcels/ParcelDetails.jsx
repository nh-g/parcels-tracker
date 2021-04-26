import DataField from './DataField'
import StatusIcon from "./StatusIcon";
import StatusOnText from "./StatusOnText";
import Date from "../Date";

export default function ParcelDetails({ parcels }) {

  const {
    location_name,
    etc,
    verification_required: toVerify,
    notes,
    last_updated,
  } = parcels;

  return (
    <div className="parcel-details">
      {/* Mandatory fields */}
      <DataField label={"Location"} text={location_name} />
      <DataField label={"Estimated to be delivery at"} text={Date(etc)} />
      <DataField label={"Last update at"} text={Date(last_updated)} />

      {/* Optional fields*/}
      {notes && <DataField label={"Note"} text={notes} />}
      {toVerify && (
        <DataField
          label={"Verification"}
          text={"Please show up your identification when pick up"}
        />
      )}
    </div>
  );
}
