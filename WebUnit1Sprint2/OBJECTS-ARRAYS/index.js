const name = 'Amanda Johnson';
const email = 'emandaj@gmail.com';
let state = 'Florida';
let favoriteLanguage = "Japanese";


//You can organize an object like this

const user =  {
    name: 'Amanda Johnson',
    email: 'emandaj@gmail.com',
    state: 'Florida',
    language: 'Japanese'

};

//Getting properties from an object

//dot notations
user.name;
user.email;

//square bracket notation
user['name'];
user['email'];

//getting a property that does not exist will print undefined
console.log(user.color);

//BOOKMARK GETTING PROPERTIES FROM AN OBJECT

