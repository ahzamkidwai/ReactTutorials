import React, { useState } from "react";
import Tours from './components/Tours'
import data from "./data";

function App(){
  const [newTours, setnewTours] = useState(data);
  return(
    <div>
      <Tours toursdata = {data}> </Tours>
    </div>
  );
}

export default App;