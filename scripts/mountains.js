"use strict";

window.onload = function () {
    // Reference to the select element
const mountainSelect = document.getElementById("mountainSelect");

// Function to populate the select element with mountain names
function populateSelect() {
    mountainsArray.forEach(mountain => {
        const option = document.createElement("option");
        option.textContent = mountain.name;
        mountainSelect.appendChild(option);
    
        
        
    });
}

// Function to display information for the selected mountain
/* function displayMountainInfo() {
    const selectedMountainName = mountainSelect.value;
    const mountain = mountainsArray.find(mountain => mountain.name === selectedMountainName);
    const mountainInfoDiv = document.getElementById("mountainInfo");
    
    // Clear previous content
    mountainInfoDiv.innerHTML = "";

    if (mountain) {
        // Create and append information elements
        const elevation = document.createElement("p");
        elevation.textContent = "Elevation: " + mountain.elevation + " feet";

        const effort = document.createElement("p");
        effort.textContent = "Effort: " + mountain.effort;

        const desc = document.createElement("p");
        desc.textContent = "Description: " + mountain.desc;

        const coords = document.createElement("p");
        coords.textContent = "Coordinates: Lat " + mountain.coords.lat + ", Lng " + mountain.coords.lng;

        mountainInfoDiv.appendChild(elevation);
        mountainInfoDiv.appendChild(effort);
        mountainInfoDiv.appendChild(desc);
        mountainInfoDiv.appendChild(coords);
    } else {
        // Mountain not found
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Mountain not found.";
        mountainInfoDiv.appendChild(errorMessage);
    }
}

// */ //Populate select element and attach event listener
populateSelect();
//mountainSelect.addEventListener("change", displayMountainInfo);
}
