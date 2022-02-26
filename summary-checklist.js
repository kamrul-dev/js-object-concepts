/* 
    <====================summary and checklist =====================>
*/

// create object using literal and create method inside the object
const pen = {
    brand: 'econo',
    price: 10,
    writePoem: function (food) {  //objet's method
        console.log(food);
    },
}


// accessing object property
const keys = Object.keys(pen);
const values = Object.values(pen);

// loop through in object using for in loop
for (const key in pen) {
    console.log(pen[key]);
}

//object compare
const a = {a: 1};
const b = {a: 1};
const c = a;

if(a == b){

}

// object binding
const aBounded = pen.writePoem.bind(a);
aBounded();

// this