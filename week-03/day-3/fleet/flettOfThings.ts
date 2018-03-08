import {Thing} from "./thing";
import {Fleet} from "./fleet";

let fleet = new Fleet();
let thing = new Thing('thing');
//* crete a fleet of things to have this output:*/
//* 1. [ ] Get milk */
//* 2. [ ] Remove the obstacles */
//* 3. [x] Stand up */
//* 4. [x] Eat lunch */
//* Hint: You have to create a Print method also */

let first = new Thing('energy drink');
let second = new Thing('mirelit pizza');
let third = new Thing('tee');
let fourth = new Thing('cocklet');
let fifth = new Thing('instant soup');

third.complete();
fourth.complete();

fleet.add(first);
fleet.add(second);
fleet.add(third);
fleet.add(fourth);
fleet.add(fifth);

fleet.Print();