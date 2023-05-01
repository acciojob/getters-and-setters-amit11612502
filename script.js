//complete this code
class Person {
	constructor(name,age){
		this._name=name;
		this._age=age;
	}
get name1(){
	return this._name;
set age1(myage){
	this._age=myage;
}
}
class Student extends Person {
	function study(){
	console.log(this._name1 + ' is studying')
}
}

class Teacher extends Person {
	function teach(){
		console.log(this._name1+ 'is teaching')
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
