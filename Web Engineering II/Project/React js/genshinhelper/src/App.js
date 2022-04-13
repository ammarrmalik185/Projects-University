import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CharacterList from "./components/characterList/CharacterList";
import WeaponList from "./components/weaponList/WeaponList";
import ArtifactList from "./components/artifactList/ArtifactList";

function App(){
    return (
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/character">
              <CharacterList/>
            </Route>
            <Route path="/weapon">
              <WeaponList/>
            </Route>
            <Route path="/artifact">
              <ArtifactList/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default App;
  