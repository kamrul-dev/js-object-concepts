/* 
    <==================== (advanced) Use bind to borrow method from another object =====================>

    1. If any object holds the method, then this method can be used for others object using bind() method.
*/

const kamrul = {
    id: 1810,
    money: 5000,
    name: 'Kamrul Hasan',
    treatDay: function(expense){   
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

const tomVai = {
    id: 1830,
    money: 7000,
    name: 'tom Vai'
}

kamrul.treatDay(100);

// binding hero vai with kamrul object's method
const heroTreadDay = kamrul.treatDay.bind(heroVai);
heroTreadDay(500);
heroTreadDay(300);
heroTreadDay(200);

// binding tom vai with kamrul object's method
const tomTreatDay = kamrul.treatDay.bind(tomVai);
tomTreatDay(1000);