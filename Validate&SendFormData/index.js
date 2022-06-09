
function validate(){
	var firstname = document.querySelector("#fname");
var lastname = document.querySelector("#lname");
var email=document.querySelector("#email");
var msg = document.querySelector("#msg");
var check_letter_regex = /^[A-Za-z]+$/;
var subject = document.querySelector("#subject").value;
var numbers = /^[0-9]+$/;
var emails_fmt =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!(firstname.value.match(check_letter_regex))) {
    	alert('first name must have alphabet characters only and it should not be empty.');
    	firstname.focus();
    	return false;
	} else if(!(lastname.value.match(check_letter_regex))) {
    	alert('last name must have alphabet characters only and it should not be empty.');
    	lastname.focus();
    	return false;
	} else if(!(email.value.match(emails_fmt))) {
		alert('Please enter a valid email');
		email.focus();
		return false;
	} else if(msg.value.length==0) {
		alert('Please enter your message');
		msg.focus();
		return false;
	} else {
		alert('Success! form has been submitted.');
		return true;
	}
}

window.addEventListener('load', ()=>{
	const params = (new URL(document.location)).searchParams;
	const fname = params.get("fname");
	const lname = params.get("lname");
	const email = params.get("email");
	const subject = params.get("subject");
	const msg = params.get("msg");

	document.querySelector("#result-fname").innerText=fname;
	document.querySelector("#result-lname").innerText=lname;
	document.querySelector("#result-email").innerText=email;
	document.querySelector("#result-subject").innerText=subject;
	document.querySelector("#result-msg").innerText=msg;
});


