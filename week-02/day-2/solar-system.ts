'use strict';

// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];

// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Saturn"

function putSaturn(planet: string[]){

    planet.splice((planet.indexOf('Jupiter')+1), 0, 'Saturn');

    return planet;

}


console.log(putSaturn(planetList));
