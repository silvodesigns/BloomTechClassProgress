const name = "Amanda Johnson";
const email = "emandaj@gmail.com";
let state = "Florida";
let favoriteLanguage = "Japanese";

//You can organize an object like this

const user = {
  name: "Amanda Johnson",
  email: "emandaj@gmail.com",
  state: "Florida",
  language: "Japanese",
};

//Getting properties from an object

//dot notations
user.name;
user.email;

//square bracket notation
user["name"];
user["email"];

//getting a property that does not exist will print undefined
console.log(user.color);

//BOOKMARK GETTING PROPERTIES FROM AN OBJECT
// The way we read a value from an object is by its key, also known as a property.

const user2 = {
  name: "Josh Carter",
  email: "carterjosh@gmail.com",
  state: "Utah",
  "favorite programming language": "Javascript",
};

let nametoDisplay = user2.name;
console.log(`Welcome back, ${nametoDisplay}!`);
user2.state;
user2.email;
user2["favorite programming language"];

const user3 = {
  name: "Fabiola Dallas",
  email: "fabdallas@noemail.com",
  state: "Texas",
  "favorite programming language": "Python",
};

//Adding a Property to the user3 object

user3["Github username"] = "FabiD123";

//Edit a property
user3.state = "TX";

//delete a property from the object

delete user3["favorite programming language"];

// Conclusion
// In this core competency, we learned about one of Javascript's
// most flexible data types: Objects! We've covered the essential pieces of the object syntax,
// how to declare an object, how to access properties within an object, and how to add, edit,
// and remove properties within an object.We have only scratched the surface of how useful
// objects can be in our programs, but don't worry! You will learn more about objects later
// in the program.We highly recommend that you practice with objects because you will use
// them every day in your software development career.
