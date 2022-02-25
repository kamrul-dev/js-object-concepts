/* 
    <====================  (advanced) Compare objects, referential integrity =====================>

    1. If the objects look like the same but different declarations then we can not compare with the double (==) or triple (===).
    2. If the objects are the same reference then the comparison result will be true.
*/

/* 
const first = {a: 1};
const second = {a: 1};
const third = first;  // referantial . If the objects are same referece then compare result will be true.

if(first === third){
    console.log('objects are equal');
}
else{
    console.log('objects are different');
} */

//====================================================================================================

/* 
// compare others way
// This method compare values position by position, if it is matched then return true result. if it is not mathed values position by position then return false result.
// But it has problem

const first = {a: 1, b: 2};
const second = {a: 1, b: 2};
 
console.log(JSON.stringify(first));
console.log(JSON.stringify(second));
if(JSON.stringify(first) === JSON.stringify(second)){
    console.log('objects are equal'); //output
}
else{
    console.log('objects are different');
} */

//====================================================================================================


/* 
// compare others way
// This method compare values position by position, if it is matched then return true result. if it is not mathed values position by position then return false result.
// But it has problem

const first = {a: 1, b: 2};
const second = {b: 2, a: 1}; // not same in position

console.log(JSON.stringify(first));
console.log(JSON.stringify(second));
if(JSON.stringify(first) === JSON.stringify(second)){
    console.log('objects are equal');
}
else{
    console.log('objects are different'); // output
} */

//====================================================================================================


// object compare in best way
const first2 = { a: 1, b: 2 };
const second2 = { b: 2, a: 1 };
function compareObject(obj1, obj2) {
    // check object keys lengths are same or not
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    // check object property values are same or not
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}
const isEqual = compareObject(first2, second2);
console.log(isEqual);
