var database = firebase.database();

var user = firebase.auth().currentUser;

var email;

var name = "Driving";

var descr = "Able to drive a vehicle"; 

function addSkill() {
		
		
	
  firebase.database().ref('skills/' + firebase.auth().currentUser.uid).set({
    skillName: name,
    skillDescr: descr
 });
}