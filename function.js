

function createGreeting(name,age){

    const yob = getYearOfBirth(age);

    return 'I was born in ' + yob;

}

const greeting1 = createGreeting('woodelin', 29);
console.log(greeting1);

function getYearOfBirth(age){

    const yearOfBirth = 2019 - age;

    return yearOfBirth;

  }

  getYearOfBirth(29);