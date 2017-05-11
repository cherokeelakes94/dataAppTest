document.addEventListener("DOMContentLoaded", function() {
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("login-div").style.display = 'none';
	document.getElementById("div-my-rewards").classList.remove("disabled");
  } else {
    document.getElementById("login-div").style.display = 'block';
	
	document.getElementById("div-my-rewards").classList.add("disabled");
	document.getElementById("div-skills").classList.add("disabled");
	document.getElementById("div-my-profile").classList.add('disabled');
	document.getElementById("div-attributes").classList.add("disabled");	
  }
});
});
