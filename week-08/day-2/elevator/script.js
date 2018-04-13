class ElevatorController {
  constructor(floors, maxPeople) {
    this.model = new ElevatorModel(floors, maxPeople);
    this.view = new ElevatorView();
  }

  up(btn) {
    if(this.model.elevatorPosition < this.model.maximumFloor - 1) {
      document.querySelector(btn).addEventListener('click', () => {
        this.model.elevatorPosition++;
        this.view.where(this.model);
      });
    }
  }
  
  down(btn) {
    if(this.model.elevatorPosition = 0) {
      document.querySelector(btn).addEventListener('click', () => {
        this.model.elevatorPosition--;
        this.view.where(this.model);
      });
    }
  }

  draw() {
    this.view.draw(this.model);
    this.view.where(this.model);
  }

  addPeople(btn) {
    if(this.model.peopleInTheElevator < this.model.maxPeople) {
      document.querySelector(btn).addEventListener('click', () => {
        this.model.peopleInTheElevator++;
        this.view.where(this.model);
      });
    }
  }

  removePeople(btn) {
    document.querySelector(btn).addEventListener('click', () => {
      this.model.peopleInTheElevator--;
      this.view.where(this.model);
    });
  }
}

class ElevatorModel {     //-------------------------
  constructor(maximumFloor, maxPeople) {
    this.elevatorPosition = 0;
    this.peopleInTheElevator = 0;
    this.maxPeople = maxPeople || 6;
    this.maximumFloor = maximumFloor || 10;
  }

  addPeople() {
    this.peopleInTheElevator++;
  }

  removePeople() {
    this.peopleInTheElevator--;
  }
}

class ElevatorView {
  constructor() {
  
  }

  draw(ElevatorModel) {
    for(let i = 0; i < ElevatorModel.maximumFloor; i++) {
      let p = document.createElement('p');
      p.setAttribute('class', 'floor');
      document.querySelector('.elevator').appendChild(p);
    }
  }

  where(ElevatorModel) {
    let p = document.querySelectorAll('p');
    p.forEach( (e) => {
      e.style.background = 'Grey';
      e.innerText = '';
    });
    p[ElevatorModel.elevatorPosition].style.background = 'Red';
    p[ElevatorModel.elevatorPosition].innerText = ElevatorModel.peopleInTheElevator;
    
  }
  
}


const controller = new ElevatorController(9, 6);
controller.draw();
controller.up('.up');
controller.down('.down');
controller.addPeople('.add');
controller.removePeople('.remove');


