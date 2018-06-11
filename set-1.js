const whoAmI = function(name = 'John' , age = 20) {
    const yob = yearOfBirth(age);

	try {
   		console.log(`My name is ${name} and I am ${age} years old`);
    	console.log(`I was born in ${yob}`);
    	if (age < 0) throw new Error("Age can not be negative");

	} catch(e) {
		console.error(e.message);
	}
}


const yearOfBirth = function(age){
	return 2018 - age;
}

whoAmI("olyskoop", -5);
