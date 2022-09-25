// Declaring the variable with string type
let a: string = 'Bingo';
a = 'Naveen';
a = 10;

// Declaring the variable with Number type
let b: number = 10;
b = 'Naveen';

// Declaring the variable with Boolean type
let c: boolean = true;
c = '10';

// Declarign the variable with object type
let obj: object = { name: 'Naveen' };
obj['age'] = 25;
obj = 'obj';

// Declaring the variable with array of strings type
let d: string[] = ['a', 'b', 'c', 'd', 'e'];
d[3] = 10;

// Declaring the variable with null
let nothing: null = null;
// Declaring the variable with undefined
let notdef: undefined = undefined;

// Defining the variable type any
let anything: any = 'this is string';
anything = 10;
anything = false;
anything();

// Defining the array
const movies = ['a', 'b', 'c', 'd', 'e'];

let selectedMovie;
for (let i = 0; i < movies.length; i++) {
  if (movies[i] === 'a') {
    selectedMovie = 'a';
  }
}

let abc = 'abc';
abc = 10;
