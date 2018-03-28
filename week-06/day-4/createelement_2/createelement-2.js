const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }
]

let listElement = document.querySelector('li');
listElement.remove();

let list = document.querySelector('ul');

for(let i = 0; i < planetData.length; i++) {

  let element = document.createElement('li');
  element.textContent = planetData[i].content;
  element.setAttribute('class', planetData[i].category);

  if(planetData[i].asteroid) {
    list.appendChild(element);
  }

}