function createUser(){

var email = document.getElementById("login-email").value;

var password = document.getElementById("login-password").value

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}
