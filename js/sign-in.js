function signIN() {

var email = document.getElementById("login-email").value;

var password = document.getElementById("login-password").value

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  window.alert("sometext");
  
  var user = firebase.auth().currentUser;

  if (user) {
	document.getElementById("login-div").style.display = 'none';
  } else {
	document.getElementById("login-div").style.display = 'block';
  }
});
}

