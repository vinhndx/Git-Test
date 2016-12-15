// JavaScript Document

function checkSubmit(){
	// check username
	var name = document.getElementById("username").value;	
	if (name == ""){
		alert("The Name cannot be blank");
		document.getElementById("username").focus();
		return false;	
	}
	
	// check Email
	var email = document.getElementById("email").value;
	if(email==""){
		alert("The Email cannot be blank");
		document.getElementById("email").focus();
		return false;
	}
	else{

		var pattern1 = /^\w{1,}@[a-z]{2,}\.[a-z]{2,}$/;
		var pattern2 = /^\w{1,}@[a-z]{2,}\.[a-z]{2,}\.[a-z]{2,}$/;
		if (!pattern1.test(email) && !pattern2.test(email)){
			alert("The email format is invalid");
			document.getElementById("email").focus();
			return false;
		}
		
	}
	
	// check Category
	var cat = document.getElementById("category");
	var catVal = cat.options[cat.selectedIndex].value;
	if(catVal == "none"){
		alert("The Category must be chosen");
		document.getElementById("category").focus();
		return false;
	}
	
	// check Subject
	var subject = document.getElementById("subject").value;
	if(subject == ""){
		alert("The Subject cannot be blank");
		document.getElementById("subject").focus();
		return false;
	}
	
	// check Message
	var message = document.getElementById("message").value;
	if(message == ""){
		alert("The Message cannot be blank");
		document.getElementById("message").focus();
		return false;
	}
	
	// Finish
	alert("Thank you so much. We will reply soon.");
	return true;
}
