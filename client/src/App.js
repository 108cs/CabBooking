import { Box } from '@material-ui/core';
import './App.css';
import Navbar from "./Component/Navbar"
import PickUpDestination from './Component/PickUpDestination';
import UserDetail from './Component/UserDetail';
import AvailableCars from './Component/AvailableCars';
import Buttons from './Component/Buttons';
import Topp from './Component/Topp';
import Right from './Component/Right';

function App() {

  return (<>
    <Navbar />
    <div className="App" style={{ display: "flex", flexDirection: "row" }}>
      <Topp />
      <Right />
    </div>
  </>

  );
}

export default App;
