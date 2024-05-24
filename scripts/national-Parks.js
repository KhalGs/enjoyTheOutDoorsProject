"use strict";

window.onload = function () {
  const locationDropDownResults = document.querySelector("#locationDropDownResults");
 const parkTypeButton = document.querySelector("#parkTypeButton")
  function locationsOptions() {
    const parkLocationsDropDown = document.querySelector("#parkLocationsDropDown");

    for (const location of locationsArray) {
      const option = document.createElement("option");
      option.value = location;
      option.innerText = location;
      parkLocationsDropDown.appendChild(option);
    }  }
// Displays information about national parks with the drop down menu
  function locationsInfoDisplay() {
    const parkLocationsDropDownValue = document.querySelector("#parkLocationsDropDown").value;
    const peoplesInfoBody = document.querySelector("#peoplesInfoBody");

    peoplesInfoBody.innerHTML = '';

    for (const park of nationalParksArray) {
      if (park.State === parkLocationsDropDownValue) {
        let row = peoplesInfoBody.insertRow();
        let cell1 = row.insertCell(0);
        cell1.innerText = park.LocationName;

        let cell2 = row.insertCell(1);

        cell2.innerText = park.Address

        let cell3 = row.insertCell(2);

        cell3.innerText = park.City
      
        let cell4 = row.insertCell(3);

        cell4.innerText = park.State

        let cell5 = row.insertCell(4);

        cell5.innerText = park.ZipCode

        let cell6 = row.insertCell(5);

        cell6.innerText = park.Phone

        let cell7 = row.insertCell(6);

        cell7.innerText = park.Visit
    }
    }
  }
// function with Dropdown menu
  function TypeOptions() {
    const parkTypeDropdown = document.querySelector("#parkType");

    for (const parkTypes of parkTypesArray) {
      const option = document.createElement("option");
      option.value = parkTypes;
      option.innerText = parkTypes;
      parkTypeDropdown.appendChild(option);
    }
  }

function TypeinfomationDisplay() {
  const parkTypesDropDownValue = document.querySelector("#parkType").value;
  const peoplesInfoBody = document.querySelector("#peoplesInfoBody");


  peoplesInfoBody.innerHTML = '';
  const filteredParks = nationalParksArray.filter((park) => park.LocationName.includes(parkTypesDropDownValue));
     // filitering the park sections
    //  Seprating rows and showing name descriptions
     filteredParks.forEach((park) => {
      let row = peoplesInfoBody.insertRow();

      let cell1 = row.insertCell(0);
      cell1.innerText = park.LocationName;

      let cell2 = row.insertCell(1);
      cell2.innerText = park.Address;

      let cell3 = row.insertCell(2);
      cell3.innerText = park.City;

      let cell4 = row.insertCell(3);
      cell4.innerText = park.State;

      let cell5 = row.insertCell(4);
      cell5.innerText = park.ZipCode;

      let cell6 = row.insertCell(5);
      cell6.innerText = park.Phone;

      let cell7 = row.insertCell(6);
      cell7.innerText = park.Visit ;
    });
  }
  

  // calling the functions init
  locationDropDownResults.onclick = locationsInfoDisplay;
  locationsOptions();
  parkTypeButton.onclick =TypeinfomationDisplay;
  TypeOptions();
  }