// NPM packages
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function SearchBar() {
  // Local state
  const [query, setQuery] = useState("");

  // Constants
  const history = useHistory();

  // Methods
  function search(event) {
    event.preventDefault();

    history.push(`/search_results/${query}`);
  }

  return (
    <div>
      <div className="back-to-list">
        <Link to="/"> ＜
      </Link>
      </div>

      <form onSubmit={search} className="SearchBar">
        {/* <label
          htmlFor="sender-search"
          className="search-label"
          id="search-label"
        >
          Search parcels by sender
        </label> */}
        <div className="search-input">
          <span>
            <FontAwesomeIcon icon={faSearch} />
            　
          </span>
          <input
            type="text"
            id="sender-search"
            placeholder="Enter name of sender then hit Enter"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="search-box"
          />
          {/* <input type="submit" value="Search" className="search-button" /> */}
        </div>
      </form>
    </div>
  );
}
