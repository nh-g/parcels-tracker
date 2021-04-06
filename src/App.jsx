import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { RecoilRoot } from "recoil";

import Header from './components/Header';
// import Home from './pages/Home';
import ParcelList from './pages/ParcelList'
import SearchResult from './pages/SearchResult';
import Parcel from './pages/Parcel'

import './styles/shared.scss';

export default function App() {
return (
  // <Container>
    <Router>
      <div className="App">
        <RecoilRoot>
          <Header />
          <Switch>
            <Route component={ParcelList} path="/" exact />
            <Route path="/search_results/:query" component={SearchResult} />
            <Route path="/parcel/:id" exact component={Parcel} />
          </Switch>
        </RecoilRoot>
      </div>
    </Router>
  // </Container>
);
}
