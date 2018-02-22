'use strict';

let students: any[] = [
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function candi(arr: any[]){

    let list: string[] = [];
    let spot: number = 0;

    for(let i: number = 0; i < arr.length; i++){
        if(arr[i].candies > 4){
            list[spot] = arr[i].name;
            spot++;
        }
    }

    return list;
}

function averageCandies(arr: any[]){

    let candies: number = 0;
    for(let i: number = 0; i < arr.length; i++){
        candies += arr[i].candies;
    }
    let average: number = candies / arr.length;
    return average;

}

console.log(candi(students));
console.log(averageCandies(students));