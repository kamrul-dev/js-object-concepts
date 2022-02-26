/* 
    Loop through an object using for in, for of, object entries

    Three ways to access object properties value
        --objectName.property
        --objectName["property"]
        --objectName[expression/variable]

*/
//Creating a object
const phone = {
    name: 'i-Phone',
    brand: 'Apple',
    origin: 'USA',
    price: 120000,
}

// console.log(phone);
// console.log(phone.name);


// Accessing object property using for in loop
for (const prop in phone) {

    console.log(phone['brand']); // get the specific property value by key
    console.log(prop); // get the all property names
    console.log(phone[prop]); // get all property values
    console.log(prop, phone[prop]); // get all property key(name) and values

}

// Before apply for of loop in object we have to convert that object to array, then we can apply for of loop in object , otherwise for of loop not possible in object.
const newPhoneObj1 = Object.keys(phone);
for (const prop1 of newPhoneObj1) { // accessing keys of object property using for of loop
    console.log(prop1);
}

// Before apply for of loop in object we have to convert that object to array, then we can apply for of loop in object , otherwise for of loop not possible in object.
const newPhoneObj2 = Object.values(phone);
for (const prop2 of newPhoneObj2) { // accessing values of object property using for of loop
    console.log(prop2);
}

// Before apply for of loop in object we have to convert that object to array, then we can apply for of loop in object , otherwise for of loop not possible in object.
const newPhoneObj3 = Object.entries(phone);
for(const prop3 of newPhoneObj3){ // accessing key value pairs of object property using for of loop
    console.log(prop3);
}