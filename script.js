//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
get name1(){
	return this.name;
set age1(myage){
	this.age=myage;
}
}
class Student extends Person {
	function study(){
	console.log(this.name1 + ' is studying')
}
}

class Teacher extends Person {
	function teach(){
		console.log(this.name1+ 'is teaching')
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
