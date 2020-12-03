// Write your JavaScript code here!
window.onload = main;

// *******************MAIN**************************
function main(){
   let submit_button = document.getElementById("formSubmit");
   submit_button.onclick = function(){
      if (isValid()){
         updateShuttleRequirements();
      } else {
         console.log ("isValid failed...");
      }
   };
}

// **********************FUNCTIONS*************************
function updateShuttleRequirements(){
   console.log ("in updateShuttleRequirements...");

   let minFuelAmount = 10000;
   let maxCargoMass = 10000;

   // update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.
   let pioletTextField = document.querySelector("input[name=pilotName]");
   let copilotNameTextField = document.querySelector("input[name=copilotName]");
   
   console.log(pioletTextField.value, copilotNameTextField.value);
   document.getElementById("pilotStatus").innerHTML = `Pilot ${pioletTextField.value} Ready`;
   document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotNameTextField.value} Ready`;
   
   // If the user submits a fuel level that is too low (less than 10,000 liters), change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey. 
   
   
   let fuelLevelTextField = document.querySelector("input[name=fuelLevel]");
   let cargoMassTextField = document.querySelector("input[name=cargoMass]");
   console.log(cargoMassTextField.value);
   console.log(fuelLevelTextField.value);

   if(fuelLevelTextField.value < minFuelAmount) {
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("fuelStatus").innerHTML = "Not enough fuel for the journey.";
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
      document.getElementById("launchStatus").style.color = "red";
   } 
   
   if(cargoMassTextField.value > maxCargoMass) {
      // change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off
      // The text of launchStatus should also change to "Shuttle not ready for launch" and the color should change to red
      console.log(`cargo mass: ${cargoMassTextField.value}`);

      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off.";      
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
      document.getElementById("launchStatus").style.color = "red";
   } 
   
   if ( !(fuelLevelTextField.value < minFuelAmount) && !(cargoMassTextField.value > maxCargoMass)  ){
      // change the text of launchStatus to green and display "Shuttle is ready for launch".
      document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
      document.getElementById("launchStatus").style.color = "green";

   }
   // COMMENTED OUT BECAUSE BUTTON MOVED OUT OF FORM event.preventDefault()
}

function isValid() {
   console.log ("in isValid...");
   let pioletTextField = document.querySelector("input[name=pilotName]");
   let copilotNameTextField = document.querySelector("input[name=copilotName]");
   let fuelLevelTextField = document.querySelector("input[name=fuelLevel]");
   let cargoMassTextField = document.querySelector("input[name=cargoMass]");

   // check piolet name field
   if(pioletTextField.value.length === 0) {
      window.alert("Pilot Name is required");
      return false;
   }

   // check copilot name field
   if(copilotNameTextField.value.length === 0) {
      window.alert("Co-pilot Name is required");
      return false;
   } 

   // check fuel level field
   if(fuelLevelTextField.value.length === 0) {
      window.alert("Fuel Level is required");
      return false;
   } else if(isNaN(fuelLevelTextField.value)) {
      window.alert("Fuel Level must be a number.");
      return false;
   }

   // check cargo mass field
   if(cargoMassTextField.value.length === 0) {
      window.alert("Cargo Mass is required");
      return false;
   } else if(isNaN(cargoMassTextField.value)) {
      window.alert("Cargo Mass must be a number.");
      return false;
   }
   
   
   return true;
}

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/