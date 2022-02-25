/* <====================  Object and Object Property and Method =====================> 

    1. In object, we can write function as a property name. This function called method.
    2. We can access any property from object.
    3. We can change the property value.
    4. We can return from the object using function or method.
    5. we can write array inside the object.
    6. we can write object inside the object
*/


const student = {
    id: 1810,
    name: 'Kamrul Hasan',
    major: 'cse',
    money: 5000,
    isRich: false,
    subjects: ['Math', 'English','philosophy', 'psychology'],
    bestFriend: {
        name: 'Babu',
        major: 'mathematics'
    },
    takeExam: function(){
        console.log(this.name, 'taking exam');
    },
    treatDay: function(expense, tips){   //In object, we can write function as a property name. This function called method.
        this.money = this.money - expense - tips;
        return this.money;  // We can return value from the object using function or method.
    }
}
student.takeExam();
const remainingMoney1 = student.treatDay(1000, 100);
const remainingMoney2 = student.treatDay(500, 50);
console.log(remainingMoney2);
