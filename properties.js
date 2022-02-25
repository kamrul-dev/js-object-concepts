/* 
<====================  Keys, values, entries, delete, seal, freeze =====================>

    1. Object has propeties, then properties have key value pairs;
     e.g: color: 'yellow' -- here [key = color] and [value = 'yellow']

    2. Object.keys(objectName); >>This method returns properties name as an array
    3. Object.values(objectName); >>This method returns properties values as an array
    3. Object.entries(objectName); >>This method returns properties key value pairs as an individual array for each key value pair.
    4. delete objectName.property; >> This method delete the object property and also property value
    5. Object.seal(objectName); >> When seal the object that time we can not delete the object property but we can change the property value.

            Object.seal(objectName):
                -- Deletion of existing property is not possible
                -- Insertion of new property is not possible
                -- Modification of new property is possible

    6. Object.freeze(objectName); 
                -- Deletion of existing property is not possible
                -- Insertion of new property is not possible
                -- Modification of new property is not possible

*/
const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};

// getting all properties name
const keys = Object.keys(bottle);
console.log(keys);

//=======================================================================

// getting all properites value
const values = Object.values(bottle);
console.log(values);

//=======================================================================

// getting all properties keys and values
const pairs = Object.entries(bottle);
console.log(pairs);

//=======================================================================
/* // delete object property
delete bottle.isCleaned;
console.log(bottle); */


//=======================================================================

/* 
Object.seal(objectName):
                -- Deletion of existing property is not possible
                -- Insertion of new property is not possible
                -- Modification of new property is possible
*/

/* 
Object.seal(bottle);
bottle.price = 100;
bottle.height = 12; // we cannot add property when seal applied
delete bottle.isCleaned;
console.log(bottle); */

//=======================================================================

/* 
    Object.seal(objectName); 
                -- Deletion of existing property is not possible
                -- Insertion of new property is not possible
                -- Modification of new property is not possible
*/

Object.freeze(bottle);
bottle.price = 100;
bottle.height = 12; 
delete bottle.isCleaned;
console.log(bottle);