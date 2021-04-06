// NPM package
import { Link } from "react-router-dom";

// Project files
import SearchBar from "./SearchBar";

export default function Header() {

  return (
    <header className="header">
      <SearchBar />
    </header>
  );
}
