/* 
    <==================== ( super advanced) Understand this keyword in JavaScript =====================>


    =================================== this keyword =========================
    (I). "this" keyword is a "execution context";
    (II). In the regular method leftside element will be context(e.g: kamrul.myTreadDay();).
    (III). In Arrow function context will be catched according to the top level.
    (IV). If you click on the DOM element that event will be 'this'.
    (v). If the element of the DOM of the event is event handler(after execution), then the function of calling will depend on "this".

    ==============================================================================

    1. window : Where the javascript code runs, that is the window.
        e.g: window.console.log(); here console.log(); is already inside the window that's why we do not need to write window, just write console.log();
   
    2. "this" keyword: When writing this keyword that defines which context code will be executed.

    3. myTreatDay() : code runs with window context. That means execution is global.

    5. kamrul.myTreadDay() : There is something existing before the dot. That means it is "this" execution context.



    Difference between arrow function and regular function
    =======================================================
    Arrow Fucntion:
            -- Arrow function can not hold its own 'this' value.
    Regular Fucntion:
            -- Regular function can hold its own 'this' value.



*/

// console.log(this);

const kamrul = {
    id: 1810,
    money: 5000,
    name: 'Kamrul Hasan',
    treatDayArrow: () => {
        console.log(this);
    },
    treatDayInside: function () {
        const myArrow = () => console.log("From function inside arow function: ", this);
        myArrow();
    },
    treatDay: function (expense) {
        this.money = this.money - expense;
        console.log("Result from here: ", this);
        return this.money;
    }
}

const heroVai = {
    id: 1812,
    money: 6000,
    name: 'Hero Vai'
}

function add() {
    console.log(this);
}