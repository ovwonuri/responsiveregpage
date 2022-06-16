/*First, we need to target all our classes and 
id from the HTML inside the JavaScript. 
To do this task efficiently, make these two functions
*/
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);


/**Then, store the classes and id inside these variables  */
let fname = id("f_name"),
    lname = id("l_name"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	
	if(fnameValue === '') {
		setErrorFor(fname, 0, 'First name cannot be empty');
	} else {
		setSuccessFor(fname, 0);
	}
    if(lnameValue === '') {
		setErrorFor(lname, 1, 'Last name cannot be empty');
	} else {
		setSuccessFor(lname, 1);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 2, 'Email cannot be empty');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 2, 'Looks like this is not an email');
	} else {
		setSuccessFor(email, 2);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 3, 'Password cannot be blank');
	} else {
		setSuccessFor(password, 3);
	}
	
	/*if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}*/
}

function setErrorFor(input,serial, message) {
    errorMsg[serial].innerHTML = message;
    input.style.border = "2px solid red";

    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
	/*const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;*/
}

function setSuccessFor(input, serial) {
    errorMsg[serial].innerHTML = '';
    input.style.border = "2px solid green";
    
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
	/*const formControl = input.parentElement;
	formControl.className = 'form-control success';*/
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
