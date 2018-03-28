const kids = [{"pet_name":"Wattled crane","owner":"Bryant"},
{"pet_name":"Devil, tasmanian","owner":"Alejandro"},
{"pet_name":"Mynah, common","owner":"Nelie"},
{"pet_name":"Dolphin, common","owner":"Mariele"},
{"pet_name":"Gray duiker","owner":"Maddalena"},
{"pet_name":"Crab (unidentified)","owner":"Lucine"},
{"pet_name":"Ant (unidentified)","owner":"Lorianna"},
{"pet_name":"Bison, american","owner":"Tommie"},
{"pet_name":"Yellow mongoose","owner":"Vivyan"},
{"pet_name":"Carpet snake","owner":"Veda"},
{"pet_name":"Lesser mouse lemur","owner":"Isidor"}];

let pets = document.getElementById('pets');
/*
let elements = document.createElement('article');
console.log(elements);

pets.appendChild(elements);

elements.innerText = 'hello';
*/
for(let i = 0; i < kids.length - 1; i++) {
  let elements = document.createElement('article');

  let h = document.createElement('h3');
  let p = document.createElement('p');

  h.innerText = kids[i].owner;
  p.innerText = kids[i].pet_name;

  elements.appendChild(h);
  elements.appendChild(p);

  pets.appendChild(elements);
}

