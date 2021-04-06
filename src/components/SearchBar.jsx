// NPM packages
import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faSearch} from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

export default function SearchBar() {
  // Local state
  const [query, setQuery] = useState("");
    const [menuActive, setMenuActive] = useState(false)

  // Constants
  const history = useHistory();

  // Methods
  function search(event) {
    event.preventDefault();

    history.push(`/search_results/${query}`);
  }

  return (
    <div>
      <form onSubmit={search} className="search-bar">
        {/* <div className="search-input"> */}
        {/* <a
          className="header-icon"
          href="#sender-search"
          onClick={() => setMenuActive(!menuActive)}
        >
          <FontAwesomeIcon icon={faSearch} /> 　
        </a> */}
        <input
          type="text"
          id="sender-search"
          placeholder="🔍   Put name of sender then hit Enter"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="search-box"
        />
        {/* <input type="submit" value="Search" className="search-button" /> */}
        {/* </div> */}
      </form>
    </div>
  );
}
