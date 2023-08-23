// Question 1:
// console.log("" + 1 + 0); //10
// console.log("" - 1 + 0); //-1
// console.log(true + false); //1
// console.log(!true); //false
// console.log(6 / "3"); //2
// console.log("2" * "3"); //6
// console.log(4 + 5 + "px"); //9px
// console.log("$" + 4 + 5); //$45
// console.log("4" - 2); //2
// console.log("4px" - 2); //NaN
// console.log("-9" + 5); //-95
// console.log("-9" - 5); //-14
// console.log(null + 1); //1
// console.log(undefined + 1); //NaN
// console.log(undefined == 1); //NaN
// console.log(undefined === null); //false
// console.log("\t\n" - 2); //-2 


// Question 2:
let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition = three + four; 
let multiplication = three * four;
let division = three / four;
let subtraction = three - four;
let lessThan1 = three < four;
let lessThan2 = thirty < four;
// console.log(three + four); //34
// console.log(three * four); //12
// console.log(three / four); //0.75
// console.log(three - four); //-1
// console.log(three < four); //true
// console.log(thirty < four); //true 


// Question 3:
// if (0) console.log ('#1 zero is true'); //will not print because 0 has a zero value, therefore it is false
// if ("0") console.log ('#2 zero is true'); //will print because "0" is a non-empty string, therefore it is true
// if (null) console.log ('null is true'); //will not print because null has no value, therefore it is false
// if (-1) console.log ('negative is true'); //will print because -1 is a non-zero number, therefore it is true
// if (1) console.log ('positive is true');//will print because 1 is a non-zero number, therefore it is true


// Question 4:
let a = 2, b = 3; 
let result = ` ${ a } + ${ b } is `; 

if (a + b < 10) { 
    result += 'less than 10' ; 
} else { 
    result += 'greater than 10' ; 
}
// console.log(result);
// console.log(a + b < 10 ? result += 'less than 10' : result += 'greater than 10');


// Question 5:
function getGreeting(name) { 
    return 'Hello ' + name + '!' ; 
} 
const getGreeting = function(name) {
    return 'Hello ' + name + '!' ;
}
// console.log(getGreeting('Nicole')); 

const getGreeting = (name) => 'Hello ' + name + '!';
// console.log(getGreeting('Nicole'));


// Question 6:
const westley = { 
    name: 'Westley', 
    numFingers: 5 
} 
const rugen = { 
    name: 'Count Rugen', 
    numFingers: 6 
} 

const inigo = { 
    firstName: 'Inigo', 
    lastName: 'Montoya',
    greeting(person) { 
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`; 
        // console.log(greeting + this.getCatchPhrase(person)); 
    }, 
    
    getCatchPhrase(person) { 
        if (person.numFingers === 6) {
            return 'You killed my father. Prepare to die.';
        }
         return 'Nice to meet you.';
    } 
} 
inigo.greeting(westley) 
inigo.greeting(rugen) 


const westley = { 
    name: 'Westley', 
    numFingers: 5 
} 
const rugen = { 
    name: 'Count Rugen', 
    numFingers: 6 
} 

const inigo = { 
    firstName: 'Inigo', 
    lastName: 'Montoya',
    greeting(person) { 
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`; 
        // console.log(greeting + this.getCatchPhrase(person)); 
    }, 
    
    getCatchPhrase: (person) =>
        person.numFingers === 6 ? 'You killed my father. Prepare to die.' : 'Nice to meet you.',
    };

inigo.greeting(westley);
inigo.greeting(rugen); 


// Quesetion 7:
const basketballGame = { 
    score: 0,
    fouls: 0,
     freeThrow() { 
        this.score ++; 
        return this;
    }, 
    basket() {
        this.score += 2;
        return this;
    }, 
    threePointer () {
        this.score += 3;
        return this;
     }, 
     incrementFoul() {
        this.fouls++;
        return this;
     },
     halfTime () { 
        // console.log('Halftime score is ' + this.score + ', fouls: ' + this.fouls); 
        return this;
    },
    finalScore() {
        // console.log('Full-time final score is ' + this.score + ', fouls: ' + this.fouls);
        return this;
    },
};

//modify each of the above object methods to enable function chaining as below: 
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().incrementFoul().halfTime().incrementFoul().freeThrow().freeThrow().finalScore();


// Question 8:
const sydney = { 
    name: 'Sydney', 
    population: 5_121_000, 
    state: 'NSW', 
    founded: '26 January 1788', 
    timezone: 'Australia/Sydney' 
};

for (let key in sydney) {
    // console.log('key: ' + key);
    // console.log('value: ' + sydney[key]);
};

const denver = {
    name: 'Denver',
    population: 711_000,
    state: 'CO',
    founded: '22 November 1858',
    timezone: 'Mountain Standard'
};

for (let key in denver) {
    // console.log('key: ' + key);
    // console.log('value: ' + denver[key]);
};


// Question 9:
let teamSports = ['Hockey', 'Cricket', 'Volleyball']; 
// let moreSports = teamSports;
let moreSports = teamSports.slice();
moreSports.push('Tennis');
moreSports.unshift('Basketball');
// console.log('teamSports:', teamSports);
// console.log('moreSports:', moreSports);
// console.log('Original teamSports', teamSports);

let dog1 = 'Bingo'; 
let dog2 = dog1;
dog2 = 'Molly';
// console.log('dog1:', dog1);
// console.log('dog2:', dog2);

let cat1 = {name: 'Fluffy', breed: 'Siberian'};
let cat2 = cat1;
let cat2 = Object.assign({}, cat1);
cat2.name = 'Tom';
// console.log('cat1:', cat1);
// console.log('cat2:', cat2);
// console.log('Original cat1:', cat1);

// teamSports: The teamSports array was modified using the moreSports (slice) variable, but the original array was unchanged because moreSports is a reference to the same array in memory. The changes made to moreSports didn't affect the original teamSports.
// dog1: The dog1 variable was not modified in the code provided, so its value remains 'Bingo'.
// cat1: The cat1 object's name property was modified using the cat2 variable, and both cat1 and cat2 reference the same object in memory. Changing the name property of one variable affects the other variable as well.
// In summary, changes made to variables referencing the same object in memory will affect that object regardless of which variable is used to make the change. However, variables that reference primitive values (like strings and numbers) store those values directly, so changes to one variable don't affect others.


// Question 10:
function Person (name, age) { 
    this.name = name; 
    this.age = age; 
    this.human = true; 

    this.canDrive = function () {
        return this.age >= 16;
    };
}

let Person1 = new Person('Kevin Hart', 44);
let Person2 = new Person('Rowan Atkinson', 68);

// console.log('Person 1 can drive:', Person1.canDrive());
// console.log('Person 2 can drive:', Person2.canDrive());

class PersonClass {
    constructor(name, age) {
        this.name = name; 
        this.age = age; 
        this.human = true; 
    }
    canDrive() {
        return this.age >= 16;
    };
}

let Person1 = new PersonClass('Kevin Hart', 44);
let Person2 = new PersonClass('Rowan Atkinson', 68);
let Person3 = new PersonClass('Meryl Streep', 77);

// console.log('Person 1 can drive:', Person1.canDrive());
// console.log('Person 2 can drive:', Person2.canDrive());
// console.log('Person 3 can drive:', Person3.canDrive());