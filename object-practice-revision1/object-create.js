/* 
    Different way to Create Object
*/

// Object literal
const instructor = {name: 'Jhankar Mahbub', job: 'Web Developer'};

//Object create using new keyword
const person = new Object();
console.log(person);

//Object create using object.create
const man = Object.create(instructor);
console.log(man);

//Object create using class and constructor
class Student{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}
const studentDetails = new Student(1810, 'Kamrul');
console.log(studentDetails.name);  // accessing object property value
console.log(studentDetails['id']);  // accessing object property value
console.log(studentDetails); //object output 

//Object create using function
function foodDetails(foodName, foodPrice){
    this.foodName = foodName;
    this.foodPrice = foodPrice;
}
const objResult = new foodDetails('Biryani', 120);
console.log(objResult);