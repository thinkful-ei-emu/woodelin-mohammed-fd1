

function createGreeting(name,age){

    const yob = getYearOfBirth(age);

    return 'Hi my name is' + name + ' and im ' + age + 'years old. I was born in ' +  yob;


    if(name === undefined || age !== 'number'){

         throw new Error('argument is not valid')
    } 

    if( typeof isNaN(age) || name !== 'string'){
        throw new Error('age must be a number');

    }

    if( age < 0) {
        throw new Error('age cannot be a negative');
    }


}

try {

    const greeting1 = createGreeting('woodelin', 29);
    console.log(greeting1);

} catch(e){
    console.e(message);
}



function getYearOfBirth(age){

    const yearOfBirth = 2019 - age;

    return yearOfBirth;

  }

  getYearOfBirth(29);