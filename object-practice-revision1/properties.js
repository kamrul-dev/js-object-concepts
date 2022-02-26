/* 
    Keys, values, entries, delete, seal, freeze
*/
const employee = {
    name: 'Kamrul',
    id: '165',
    job: 'Jr. Web Developer',
    salary: 150000,
}

// accessing keys from the object using Object.keys() method
const keys = Object.keys(employee);
console.log('Keys from object: ', keys); // result return as an array

// accessing vlaues from the object using Object.values() method
const values = Object.values(employee);
console.log('values from the object: ', values); // result return as an array

// accessing key value pairs from the object using Object.entries() method
const entries = Object.entries(employee);
console.log('key value pairs from the object: ', entries); // result return as an individual array or each key value pair


/* 
// delete property
delete employee.salary;
console.log(employee);
 */



/*
 // seal the object using Object.seal() method
    -- deletion is not posible
    -- insertion is not possible
    -- modification is possible
*/
const obj1 = Object.seal(employee);
console.log(obj1);



// delete property
delete employee.salary;    // after seal the object deletion is not possible
employee.salary = 200000;  // after seal the object modification is possible
console.log(employee); 


// freeze the object using Object.freeze() method
/* 
    -- deletion is not posible
    -- insertion is not possible
    -- modification is not possible
*/
const obj2 = Object.freeze(employee);
console.log(obj2);

