import React from 'react';
import './App.css';

// key topics:
// declaring variables with types
// unions: |
// typed arrays like let role:[number, string];
// declaring types (objects, etc.)
// declaring type signatures for functions
// using & to extend types
  // type typeName2 = typeName1 & {...}
  // type typeName = interfaceName & {...}
// interface interfaceName2 extends interfaceName1
// class ClassName extends interfaceName {}

// optional attributes with ?

// key questions:
// difference between type and interface (is it like Java)?
// difference between any and unknown
// difference between void and never


let name: string;
let age: number | string;

age = "five";

let isStudent: boolean;
let hobbies: number[];
let role:[number, string];

let printName: (name:string) => void;


role = [5, 'd'];

interface Person {
  name: string;
  age?: number;
};

interface Guy extends Person {
  profession: string;
}

let person: Person = {
  name: "Drew"
};

let lotsOfPeople: Person[];

type X = {
  a: string;
  b: number;
};

type Y = X & {
  c: string;
  d: number;
};

// only works when "X &"" removed from declaration of type Y
/*
let y: Y = {
  c: "bbkjfksd",
  d: 42
};
*/

function App() {
  return (
    <div className="App">
      Hello world!
    </div>
  );
}

export default App;
