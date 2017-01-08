function signUserOut(){
	firebase.auth().signOut().then(function() {
	  document.getElementById("login-div").style.display = 'block';
	}, function(error) {
	  // An error happened.
	});
}