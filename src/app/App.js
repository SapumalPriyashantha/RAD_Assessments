import React, {Fragment} from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import BasicCard from "../pages/home";
import NavBar from "../componets/navBar"
import Switch from "@mui/material/Switch";
import {Routes} from "react-router";

function App() {
  return (
      <Router>
          <div>
              <Routes>
                  <Route exact path='/' element={<NavBar/>}/>
                  {/*<Route exact path='posts' element={<Posts/>}/>*/}
                  {/*<Route path='login' element={<Login/>}/>*/}
                  {/*<Route path='flex-layout' element={<FlexBoxLayout/>}/>*/}
                  {/*<Route path='grid-layout' element={<GridLayout/>}/>*/}
                  <Route path='/home' element={<BasicCard/>}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
