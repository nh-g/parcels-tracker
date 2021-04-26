import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Header from './components/Header';
// import Home from './pages/Home';
import ParcelList from './pages/ParcelList'
import SearchResult from './pages/SearchResult';
import Parcel from './pages/Parcel'

import './styles/shared.scss';
import Footer from "./components/Footer";

export default function App() {
return (
    <Router>
      <div className="App">
        <RecoilRoot>
          <Header />
          <Switch>
            <Route component={ParcelList} path="/" exact />
            <Route path="/search_results/:query" component={SearchResult} />
            <Route path="/parcel/:id" exact component={Parcel} />
          </Switch>
          <Footer />
        </RecoilRoot>
      </div>
    </Router>
);
}
