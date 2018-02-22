'use strict';

let students: any[] = [
  {name: 'Teodor', age: 3, candies: 2},
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function candies(arr: any[]){

    let candie: number = 0;

    for(let i: number = 0; i < arr.length; i++){

        candie += arr[i].candies;

    }
    return candie;
}


function list(arr: any[]){

    let names: string[] = [];
    for(let i: number = 0; i < arr.length; i++){
        names[i] = arr[i].name;
    }

    let ages: number = 0;
    for(let j: number = 0; j < arr.length; j++){
        if(arr[j].candies < 5){
            ages += arr[j].age;
        }
    }
    console.log(names);
    return ages;
}


console.log(candies(students));
console.log(list(students))