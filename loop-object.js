/* 
<====================  Loop through an object using for in, for of, object entries =====================>

    1. for loop:
        -- for (let i = 0; i < 0; i++){}; // regular for loop
        -- for (const num of numbers){}; // Apply on array or array like object but not used in object 
        -- for (const prop in student){}; // Apply on object but not apply on array because it can not give guarantee to keep same order of array elements.

    2. Three(3) ways to access property value from an object
        -- objectName.property
        -- objectName["property"]
        -- objectName[expression/variable]
        -- 
*/

const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};

for(const prop in bottle){
    // console.log(bottle[prop]); // get only property values
    console.log(prop, bottle[prop]); // get keys and values
}


// by using keys method we can loop through an object with for of loop
const keys = Object.keys(bottle);
console.log(keys);  // it returns an array
for (const prop of keys){
    console.log(prop, bottle[prop]);
}


// advance topic : by using entries method we can loop through an object with for of loop
const entries = Object.entries(bottle);
// console.log(entries);
// const [key, value] = ['color', 'yellow'];
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value)
}