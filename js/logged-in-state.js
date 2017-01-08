document.addEventListener("DOMContentLoaded", function() {
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("login-div").style.display = 'none';
	document.getElementById("div-status").classList.remove("disabled");
  } else {
    document.getElementById("login-div").style.display = 'block';
	
	document.getElementById("div-status").classList.add("disabled");
	document.getElementById("div-skills").classList.add("disabled");
	document.getElementById("div-journal").classList.add('disabled');
	document.getElementById("div-attributes").classList.add("disabled");	
  }
});
});