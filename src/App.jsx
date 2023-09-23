import React from "react";
import Box from "./components/Box";
import "./styles.css";

function App() {
  const boxes = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    event: `Event ${index + 1}`,
    image: `https://via.placeholder.com/150?text=Event+${index + 1}`,
  }));

  const handleButtonClick = (boxId) => {
    alert(`Customize button clicked for Box ${boxId + 1}`);
  };

  return (
    <div className="App">
      <h1>❚█══█❚ Gyms and Fitness Centers near you! 🏋️ </h1>
      <div className="box-container">
       <Box name='Blink Fitness' img='src\assets\BlinkFitness.png' url='https://locations.blinkfitness.com/ny/queens/102-16-liberty-avenue'/>
       <Box name='Planet Fitness' img='src\assets\PlanetFitness.jpeg' url='https://www.planetfitness.com/gyms/queens-jamaica-ny?utm_medium=yext&utm_source=extnet'/>
       <Box name='Crunch Fitness' img='src\assets\CrunchFitness.jpeg'/>
       <Box name='Coliseum Gym' img='src\assets\ColiseumGym.jpeg'/>
       <Box name='Retro Fitness' img='src\assets\RetroFitness.jpeg'/>
       <Box name='Crossfit Glendale' img='src\assets\CrossfitGlendale.jpeg'/>
       <Box name='NY Sports Club' img='src\assets\NYSportsClub.jpeg'/>
       <Box name='Iron Fortress Training' img='src\assets\Iron Fortress Training.jpeg'/>
       <Box name='Force Fitness Club' img='src\assets\Force Fitness Club.jpeg'/>
       <Box name='LA Fitness' img='src\assets\LAFitness.jpeg'/>
      </div>
    </div>
  );
}

export default App;
