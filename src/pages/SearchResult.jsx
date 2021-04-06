// NPM package
import { useRecoilValue } from "recoil";

// Project files
import { parcelState } from "../state/parcelState";
import ParcelItem from "../components/parcels/ParcelItem";

export default function SearchResult({ match }) {
  // Global state
  const parcels = useRecoilValue(parcelState);

  // Constants
  const query = match.params.query.toUpperCase();
  const filteredResults = parcels.filter((item) =>
    item.sender.toUpperCase().match(query)
  );
  const FilteredOrderArray = filteredResults.map((item) => (
    <ParcelItem key={item.id} parcel={item} />
  ));

  return (
    <div id="results" className="container">
      <h1>Search results</h1>
      <div className="results-grid">
        {filteredResults.length > 0 ? (
          FilteredOrderArray
        ) : (
          <p>No results found. Try another search term.</p>
        )}
      </div>
    </div>
  );
}
