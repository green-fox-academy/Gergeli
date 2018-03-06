 class Person {
  public name: string;
  public age: number;
  public gender: string;

  person: Person[];

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log('Hi, I\'m ' + `${this.name}` + ', a ' + `${this.age}` + ' year old ' + `${this.gender}` + '.');
  }
  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
}

class Student extends Person {
  private previousOrganization: string;
  private skippedDays: number;
  
  constructor(name: string, age: number, gender: string, previousOrganization: string) {
    super(name, age, gender);
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
  }

  introduce() {
    console.log(`Hi, I\'m  + ${this.name} , a  ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }
  getGoal() {
    console.log('Be a junior software developer.');
  }
  skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
}

class Mentor extends Person {
  private level: string;

  constructor(name: string, age: number, gender: string, level: string) {
    super(name, age, gender);
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }

  getGole() {
    console.log('Educate brilliant junior software developers.');
  }
  introduce() {
    console.log('Hi, I\'m ' + `${this.name}` + ', a ' + `${this.age}` + ' year old ' + `${this.gender}` + `${this.level}` + ' mentor.');
  }
}


class Sponsor extends Person {
  private company: string;
  private hiredStudents: number;

  constructor(name: string, age: number, gender: string, company: string) {
    super(name, age, gender);
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
  }

  set hired(hiredStudents: number) {
    this.hiredStudents = hiredStudents;
  }

  introduce() {
    console.log('Hi, I\'m ' + `${this.name}` + ', a ' + `${this.age}` + ' year old ' + `${this.gender}` + 'who represents ' + `${this.company}` + ' and hired ' + `${this.hiredStudents}` + ' students so far.'); 
  }
  getGole() {
    console.log('Hire brilliant junior software developers.');
  }
  hire() {
    this.hiredStudents++;
  }
}

class Cohort {
  name : string;
  students: string[];
  mentor: string[];

  constructor(name) {
    this.name = name;
    this.students = [];
    this.mentor = [];
  }

  addStudent(student) {
    this.students.push(student);
  }
  addMentor(mentor) {
    this.mentor.push(mentor);
  }
  info() {
    return 'The ' + `${this.name}` + ' cohort has ' + `${this.students.length}` + ' students and ' + `${this.mentor.length}` + ' mentors.';
  }

}


let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person('Jane Doe', 30, 'female');
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student('Jane Doe', 30, 'female', 'The School of Life who');
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor('John Doe', 20, 'male', 'intermediate');
people.push(mentor);
let sponsor = new Sponsor('John Doe', 20, 'male', 'Google');
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);
student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();