import React, {Fragment} from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import BasicCard from "../pages/home";
import NavBar from "../componets/navBar"
import Customer from "../pages/customer"
import Item from "../pages/item"
import Switch from "@mui/material/Switch";
import {Routes} from "react-router";

function App() {
  return (
      <Router>
          <div>
              <Routes>
                  <Route exact path='/' element={<NavBar/>}/>
                  <Route path='/customer' element={<Customer/>}/>
                  <Route path='/item' element={<Item/>}/>
                  {/*<Route path='flex-layout' element={<FlexBoxLayout/>}/>*/}
                  {/*<Route path='grid-layout' element={<GridLayout/>}/>*/}
                  <Route path='/home' element={<BasicCard/>}/>
              </Routes>
          </div>
      </Router>
/*
    <Router>
        <div>
           <NavBar/>
        </div>
            {/!* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. *!/}
            <Switch>
                <Route path='/home' element={<BasicCard/>}/>
            </Switch>
    </Router>*/
  );
}

export default App;
