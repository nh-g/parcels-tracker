import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { RecoilRoot } from "recoil";

import Home from './pages/Home';
import Parcel from './pages/Parcel'

export default function App() {
return (
  <Container>
    <Router>
      <div className="App">
        <RecoilRoot>
          {/* <Header /> */}
          <Switch>
            <Route component={Home} path="/" exact />
            <Route path="/parcel/:id" exact component={Parcel} />
            {/* <Route component={ParcelCard} path="/parcel" />
              <Route component={SearchBar} path="/search" />
              <Route component={SearchResults} path="/search_results/:query" /> */}
          </Switch>
        </RecoilRoot>
      </div>
    </Router>
  </Container>
);
}
