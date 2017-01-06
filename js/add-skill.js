var database = firebase.database();

var userID = "user124";

var name = "Driving";

var descr = "Able to drive a vehicle" 

function addSkill() {
  firebase.database().ref('skills/' + userID).set({
    skillName: name,
    skillDescr: descr
  });
}