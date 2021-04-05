import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Home from './pages/Home';

export default function App() {
return (
  <Container>
    <Router>
      <div className="App">
            {/* <Header /> */}
            <Switch>
              <Route component={Home} path="/" exact />
              {/* <Route component={ParcelCard} path="/parcel" />
              <Route component={SearchBar} path="/search" />
              <Route component={SearchResults} path="/search_results/:query" /> */}
            </Switch>
      </div>
    </Router>
  </Container>
);
}
