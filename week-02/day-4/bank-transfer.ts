'use strict';

let accounts: any[] = [
  { client_name: 'Igor', account_number: 11234543, balance: 203004099.2 },
  { client_name: 'Vladimir', account_number: 43546731, balance: 5204100071.23 },
  { client_name: 'Sergei', account_number: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// The output should be: "Igor", "203004099.2"
// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// var accounts = [
//	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
//	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204099571.23 },
//	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1354100.0 }
//]


function cashBalance(arr: any[]){
    let list: any[] = [];
   
    for(let i: number = 0; i < arr.length; i++){
        list[i] = arr[i].client_name + ', ' + arr[i].balance;
    }
    return list;
}

function transfer(arr: any[], from: number, to: number, cash: number,){
    let t: number[] = [];

    for(let i: number = 0; i < arr.length; i++){
        if(from == arr[i].account_number){
            arr[i].balance -= cash;
            t[0] = 1;
        }
    }

    for(let j: number = 0; j < arr.length; j++){
        if(to == arr[j].account_number){
            arr[j].balance += cash;
            t[1] = 1;
        }
    }
    if(t.length != 2){
        console.log('404 - account not found');
    }else{
        console.log(arr);
    };
}



console.log(cashBalance(accounts));
console.log('\n');
transfer(accounts, 43546731, 23456311, 500);


