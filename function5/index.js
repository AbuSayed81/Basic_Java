class Student{
	constructor(name,age,cls){
		this.myname = name;
		this.myage = age;
		this.mycls = cls;
	}
	student_profile(){
		document.write(`My name is ${this.myname}. My age is ${this.myage}. My class is ${this.mycls}`);
		return`My name is ${this.myname}. My age is ${this.myage}. My class is ${this.mycls}`;
	}
}

//Inharitance

class Player extends Student{
	constructor(name,age,cls,game){
		super(name,age,cls);
		this.mygame = game;
	}
	player_profile(){
		return`${this.student_profile()}. I love to play ${this.mygame}`
	}
}
const student1 = new Player('Abu Sayed', '40', 'B.com', 'Football');
console.log(student1.player_profile());