import React, { useState } from "react";
import data from './data';
import Tours from "./components/Tours";

const App = () => {


  const [tours , setTours] = useState(data); // tours data initialise

  function removeTour(id) {  // Remove data
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
}

  if(tours.length === 0) {   // When All Remove Data , Then Refresh Store Data Again
    return (
      <div className="refresh">
        <h2>No Tours Left . . . .</h2>
        <button className="btn-white" onClick={() => setTours(data)}> Refresh </button>
      </div>
    );
  }

  return (
    <div className="App">

      <Tours tours = {tours}  removeTour = {removeTour} > </Tours>

    </div>
  )
};

export default App;
