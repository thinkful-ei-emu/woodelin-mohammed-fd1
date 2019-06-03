

function createGreeting(name,age){

    
    if(name === undefined || age === undefined){

         throw new Error('argument is not valid')
    } 

    if( typeof age !== 'number'){
        throw new TypeError('invalid variable');

    }

    if( age < 0) {
        throw new Error('age cannot be a negative');
    }
    const yob = getYearOfBirth(age);

    return 'Hi my name is' + name + ' and im ' + age + 'years old. I was born in ' +  yob;

}

getYearOfBirth(29);


function getYearOfBirth(age){

    const yearOfBirth = 2019 - age;

    return yearOfBirth;

  }

try {

    const greeting1 = createGreeting('woodelin', 29);
    console.log(greeting1);

} catch(e){
    console.error(e.message);
}

