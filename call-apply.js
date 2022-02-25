/* 
    <==================== (advanced) Difference between bind, call and apply =====================>

    |=============================================================================================================|
    |          |  call()                  |           apply()             |           bind()                      |
    |=============================================================================================================|
    |Execution |  At the time of binding  |    At the time of binding     |    At the time when we execute        |
    |          |                          |                               |    the return function                |
    |-------------------------------------------------------------------------------------------------------------|                                                                         
    |Parameter |  Any number of arguments |    Array[]                    |     Array and any number of arguments |
    |          |  on by one               |                               |                                       |
    |=============================================================================================================|         


    Note: Nowadays, do not use this type of method when comes spread operator(...)
*/

const kamrul = {
    id: 1810,
    money: 5000,
    name: 'Kamrul Hasan',
    treatDay: function(expense, tip, tax){   
        this.money = this.money - expense - tip - tax;
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

// call() method : parameters separated by comma
//==============================================
// kamrul.treatDay.call(heroVai, 500, 100, 50);
// kamrul.treatDay.call(heroVai, 300, 50, 30);


// apply() method : parameter pass as an array
//============================================
kamrul.treatDay.apply(heroVai, [500, 100, 50]);
kamrul.treatDay.apply(heroVai, [1000, 20, 100]);

kamrul.treatDay.apply(tomVai, [700, 100, 70]);


