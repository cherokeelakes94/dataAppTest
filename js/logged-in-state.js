document.addEventListener("DOMContentLoaded", function() {
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("login-div").style.display = 'none';
  } else {
    document.getElementById("login-div").style.display = 'block';
  }
});
});