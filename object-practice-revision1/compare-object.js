/* 
    Compare objects
*/

// creating objects
const first = { a: 2, b: 3 };  // first and second object look like same, but in object they are not same
const second = { a: 2, b: 3 };
const third = first;  // creating same type of reference then the comparision result will be true.

if (first === third) {
    console.log('Both are same');
}
else {
    console.log('Both are different');
}



// The best way to compare objects
const first1 = { a: 2, b: 3 };
const second2 = { a: 3, b: 2 };

function compareObjects(obj1, obj2) {
    // check object property keys lengths are same or not
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
const isEqual = compareObjects(first1, second2);
console.log(isEqual);  