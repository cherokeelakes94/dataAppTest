// Wait for the page to load first
window.onload = function() {

  //Get a reference to the link on the page
  // with an id of "mylink"
  var a = document.getElementById("link-my-rewards");
  var b = document.getElementById("link-attributes");
  var c = document.getElementById("link-skills");
  var d = document.getElementById("link-my-profile");
  
  
  
  //Set code to run when the link is clicked
  // by assigning a function to "onclick"
  a.onclick = function() {
	
	var user = firebase.auth().currentUser;
	
	if (user) { 
		//Enable
		document.getElementById("div-my-rewards").classList.remove('disabled'); 
		
		//Disable
		document.getElementById("div-attributes").classList.add("disabled");
		document.getElementById("div-skills").classList.add("disabled");
		document.getElementById("div-my-profile").classList.add('disabled'); 
	
		return false;
 	}
  }
  
/*    b.onclick = function() {
	
	var user = firebase.auth().currentUser;
	
	if (user) { 
		//Enable
		document.getElementById("div-attributes").classList.remove('disabled'); 
			
		//Disable
		document.getElementById("div-my-rewards").classList.add("disabled");
		document.getElementById("div-skills").classList.add("disabled");
		document.getElementById("div-my-profile").classList.add('disabled'); 
		
		return false;
	}
  }

  c.onclick = function() {
	
	var user = firebase.auth().currentUser;
	
	if (user) { 	
		//Enable
		document.getElementById("div-skills").classList.remove('disabled'); 
			
		//Disable
		document.getElementById("div-my-rewards").classList.add("disabled");
		document.getElementById("div-attributes").classList.add("disabled");
		document.getElementById("div-my-profile").classList.add('disabled'); 
		
		return false;
	}
  } */

  d.onclick = function() {
	
	var user = firebase.auth().currentUser;
	
	if (user) { 
		//Enable
		document.getElementById("div-my-profile").classList.remove('disabled'); 
			
		//Disable
		document.getElementById("div-my-rewards").classList.add("disabled");
		document.getElementById("div-attributes").classList.add("disabled");
		document.getElementById("div-skills").classList.add("disabled");
		
		return false;
	}
  }    
}
