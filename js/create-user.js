function createUser(){

var email = "cherokeedlakes@gmail.com";

var password = "password";

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}