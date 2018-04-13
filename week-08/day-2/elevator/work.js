class View {
  a() {
    console.log('Hello');
  }
}

class Model {
  a() {
    console.log('Hello');
  }
}

class Controller {
  constructor(a, b) {
    this.v = a;
    this.m = b;
  }

}
let v = new View();
let m = new Model();

let controller = new Controller(new View(), new Model());
controller


