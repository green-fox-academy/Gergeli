'use strict';

let watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Tibi', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns
// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to security_alchol_loot) and let them enter the festival

function securityCheck(arr: any[]){

    let alc: number = 0;
    let gun: number = 0;
    let list: string[] = [];
    let who: number = 0;

    for(let i: number = 0; i < arr.length; i++){
        if(arr[i].alcohol !== 0){
            securityAlcoholLoot += arr[i].alcohol;
            arr[i].alcohol = 0;
            alc++;
        }else if(arr[1].guns !== 0){
            watchlist[gun] = arr[i].name;
            arr[i].guns = 0;
            gun++;
        }else if(arr[i].guns == 0 && arr[i].alcohol == 0){
            list[who] = arr[i].name;
            who++;
        }
    }
    return list;
}

console.log(securityCheck(queue));