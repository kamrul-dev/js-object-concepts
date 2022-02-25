/* 
   <==================== Different ways to Create Object =====================> 
*/
//=====================================================================
// 1. -- Using object literal
//    -- Object create using literal. Basically object create in this way.
//    -- Most of the case used object literal 
const student = { name: 'Sakib Al ', job: 'cricketer' };

//=====================================================================

// 2. -- Object create using constructor
const person = new Object();
console.log(person);

//=====================================================================

// 3. --
// const human = Object.create(null);
const human = Object.create(student);
console.log(human.job);

//=====================================================================

// 4. Object create using class (syntactical sugar)
class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Kamrul', 24);
console.log(peop);

//=====================================================================

// old system
// 5. Object create using function 
function Manus(name){
    this.name = name;
}
const man = new Manus('Hasan');
console.log(man);

//=====================================================================