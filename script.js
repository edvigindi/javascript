function person (name, age) {

	this.name = name;
  this.age = age;
  this.surname = surname;
  this.nationality = nationality;
  this.result = function () {
  	console.log(this.name, this.age, this.surname, this.nationality);
  }
}

new person("John", 20, "Ivanov", "ukrainian").result();