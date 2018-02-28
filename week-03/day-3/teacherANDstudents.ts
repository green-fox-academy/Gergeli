'use strict'
/*
Create Student and Teacher classes
Student
learn()
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer()
*/

class Student {
  learn() {
    console.log("I'm learning!");
  }
  question() {
    let teach = new Teacher();
    teach.answer();
  }
}

class Teacher {
  answer() {
    console.log('Answer!');
  }
  teach() {
    let stud = new Student();
    stud.learn();
  }
}

let study = new Student();
study.learn()
study.question();

let teac = new Teacher();
teac.answer();
teac.teach();