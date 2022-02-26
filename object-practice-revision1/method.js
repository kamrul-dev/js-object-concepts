/* 
    Object method property
*/

// creating a object method property
const employee = {
    name: 'Kamrul',
    id: '165',
    job: 'Jr. Web Developer',
    salary: 150000,
    // Array inside object
    favFood: ['Biryani', 'Beef', 'hospos'],
    // object inside object
    bestTeamMember: {
        name: 'fahim',
        job: 'Web Designer'
    },
    // method inside object
    takeInstruction: function () {
        console.log(this.name, 'Is taking instructin from Sr. Developer.');
    },
    // method inside object
    treatToFriends: function(expense, tips){
        this.salary = this.salary - expense - tips;
        return this.salary;
    },
}
console.log(employee); // object output
employee.takeInstruction();
const remainingSalary = employee.treatToFriends(1000, 50);
const remainingSalary2 = employee.treatToFriends(2000, 100);
console.log(remainingSalary2);
