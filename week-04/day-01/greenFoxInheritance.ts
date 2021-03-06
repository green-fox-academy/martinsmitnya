'use strict'

/*
Create a Person class with the following fields:

name: the name of the person
age: the age of the person (integer number)
gender: the gender of the person (male / female)
And the following methods:

introduce(): prints out 'Hi, I'm name, a age year old gender.'
getGoal(): prints out 'My goal is: Live for the moment!'
And the following constructors:

Person(name, age, gender)
Person(): sets name to Jane Doe, age to 30, gender to female
*/

export class Person {
  protected _name:string;
  protected _age:number;
  protected _gender: string;

  constructor(name?: string, age?: number, gender?: string) {
    this._name = name ?? 'Jane Doe';
    this._age = age ?? 30;
    this._gender = gender ?? 'female';
  }


  public introduce():void{
    console.log(`Hi, I'm ${this._name}, a ${this._age} year old ${this._gender}.`);
  }
  public getGoal():void{
    console.log(`My goal is: Live for the moment!`);
  }


}
/* TESTING
let Sahra: Person = new Person ();
console.log(Sahra);
Sahra.getGoal();
Sahra.introduce();
*/


/*
Create a Student class that has the same fields and methods as the Person class, and has the following additional

fields:
previousOrganization: the name of the student’s previous company / school
skippedDays: the number of days skipped from the course
methods:
getGoal(): prints out 'My goal is: Be a junior software developer.'
introduce(): 'Hi, I'm name, a age year old gender from previousOrganization who skipped skippedDays days from the course already.'
skipDays(numberOfDays): increases skippedDays by numberOfDays
The Student class has the following constructors:

Student(name, age, gender, previousOrganization): beside the given parameters, it sets skippedDays to 0
Student(): sets name to Jane Doe, age to 30, gender to female, previousOrganization to The School of Life, skippedDays to 0
*/

class Student extends Person {
  protected _previousOrganization: string;
  protected _skippedDays: number;

  constructor(name?:string, age?:number, gender?:string, previousOrganization?:string){
    super(name, age, gender);
    this._previousOrganization = previousOrganization ?? 'The School of Life';
    this._skippedDays = 0;

  }

  public getGoal():void{
    console.log(`My goal is: Be a junior software developer.`);
  }
  public introduce():void{
    console.log(`Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} from ${this._previousOrganization} who skipped ${this._skippedDays} days from the course already.`);
  }
  public skipDays(numberOfDays:number):void{
    this._skippedDays += numberOfDays;
  }


}

// TESTING
let Emir = new Student('Emir', 23, 'male', 'BGE');
/*
console.log(Emir);
Emir.introduce();
Emir.skipDays(3);
Emir.getGoal();
console.log(Emir);
*/



/*
Create a Mentor class that has the same fields and methods as the Person class, and has the following additional

fields:
level: the level of the mentor (junior / intermediate / senior)
methods:
getGoal(): prints out 'My goal is: Educate brilliant junior software developers.'
introduce(): 'Hi, I'm name, a age year old gender level mentor.'
The Mentor class has the following constructors:

Mentor(name, age, gender, level)
Mentor(): sets name to Jane Doe, age to 30, gender to female, level to intermediate
*/

class Mentor extends Person {
  protected _level:string;

  constructor(name?:string, age?: number, gender?:string, level?:string) {
    super(name, age, gender);
    this._level = level ?? 'intermediate';
  }

  public getGoal() {
    console.log(`My goal is: Educate brilliant junior software developers.`);
  }
  public introduce () {
    console.log(`Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} ${this._level} mentor.`);
  }
}

// TESTING
let Basheer: Mentor = new Mentor('Basheer', 34, 'male', 'senior');
/*
console.log(Basheer);
Basheer.getGoal();
Basheer.introduce();
*/

/*
Create a Sponsor class that has the same fields and methods as the Person class, and has the following additional

fields:
company: name of the company
hiredStudents: number of students hired
method:
introduce(): 'Hi, I'm name, a age year old gender who represents company and hired hiredStudents students so far.'
hire(): increase hiredStudents by 1
getGoal(): prints out 'My goal is: Hire brilliant junior software developers.'
The Sponsor class has the following constructors:

Sponsor(name, age, gender, company): beside the given parameters, it sets hiredStudents to 0
Sponsor(): sets name to Jane Doe, age to 30, gender to female, company to Google and hiredStudents to 0
*/

class Sponsor extends Person {
  protected _company: string;
  protected _hiredStudents: number;

  constructor (name?: string, age?:number, gender?: string, company?: string){
    super (name, age, gender);
    this._company = company ?? 'Google';
    this._hiredStudents = 0;
  }

  public introduce() {
    console.log(`Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} who represents ${this._company} and hired ${this._hiredStudents} students so far.`);
  }
  public hire() {
    this._hiredStudents++

  }
  public getGoal() {
    console.log(`My goal is: Hire brilliant junior software developers.`);
  }
}

// TESTING
let Brian: Sponsor = new Sponsor('Brian', 44, 'male', 'Apple');
/*
console.log(Brian);
Brian.introduce();
Brian.getGoal();
Brian.hire();
console.log(Brian);
*/


/*
Create a Cohort class that has the following

fields:
name: the name of the cohort
students: a list of Students
mentors: a list of Mentors

The Cohort class has the following constructors:

Cohort(name): beside the given parameter, it sets students and mentors as empty lists

methods:
addStudent(Student): adds the given Student to students list
addMentor(Mentor): adds the given Mentor to mentors list
info(): prints out 'The name cohort has size of students students and size of mentors mentors.'

*/

class Cohort {
  protected _name:string;
  protected _students: Student[];
  protected _mentors: Mentor[];

  constructor(name:string) {
    this._name = name;
    this._students = [];
    this._mentors = [];
  }

  public addStudent(student: Student) {
    this._students.push(student);
  }
  public addMentor (mentor: Mentor) {
    this._mentors.push(mentor);
  }
  public info() {
    console.log(`The ${this._name} cohort has ${this._students.length} students and ${this._mentors.length} mentors.`);
  }
  
}

//Testing
let EGO = new Cohort('EGO');
/*
console.log(EGO);
EGO.addMentor(Basheer);
EGO.addStudent(Emir);
EGO.info();
console.log(EGO);
*/



// TESTING TESTING TESTING

let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

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