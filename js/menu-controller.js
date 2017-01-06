// Wait for the page to load first
window.onload = function() {

  //Get a reference to the link on the page
  // with an id of "mylink"
  var a = document.getElementById("link-status");
  var b = document.getElementById("link-attributes");
  var c = document.getElementById("link-skills");
  
  //Set code to run when the link is clicked
  // by assigning a function to "onclick"
  a.onclick = function() {
	
	//Enable
	document.getElementById("div-status").classList.remove('disabled'); 
		
	//Disable
	document.getElementById("div-attributes").classList.add("disabled");
	document.getElementById("div-skills").classList.add("disabled");
	
	return false;
  }
  
   b.onclick = function() {
	
	//Enable
	document.getElementById("div-attributes").classList.remove('disabled'); 
		
	//Disable
	document.getElementById("div-status").classList.add("disabled");
	document.getElementById("div-skills").classList.add("disabled");
	
	return false;
  }

  c.onclick = function() {
	
	//Enable
	document.getElementById("div-skills").classList.remove('disabled'); 
		
	//Disable
	document.getElementById("div-status").classList.add("disabled");
	document.getElementById("div-attributes").classList.add("disabled");
	
	return false;
  }  
}