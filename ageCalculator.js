let s = "";
let nameS = "";
function ageCalculator(name, yearOfBirth, currentYear){
	nameS = name + " is ";
	s = nameS  + (currentYear - yearOfBirth) + " years old."
	return s;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));