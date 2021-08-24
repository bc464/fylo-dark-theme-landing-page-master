const btn = document.querySelector('.btn-end');
let inputEmail = document.querySelector(".input-box");
const faultMessage = document.querySelector(".error-mail");
let isRequired = value => value === "" ? false : true;
let isEmailValid = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};
const checkEmail = () => {
	let valid = false;
	const email = inputEmail.value.trim();
		if(!isRequired(email)) {
		inputEmail.style.border = "1px solid hsl(0, 100%, 63%)";
		faultMessage.style.display = "block";
		inputEmail.style.opacity = "1";
		} else if (!isEmailValid(email)) {
		inputEmail.style.border = "1px solid hsl(0, 100%, 63%))";
		faultMessage.style.display = "block";
		inputEmail.style.opacity = "1";
		} else {
		inputEmail.style.border = "1px solid rgba(0, 0, 0, 0.1)";
		faultMessage.style.display = "none";
		inputEmail.style.opacity = "0.5";
		valid = true;
		}
		return valid;
	}
btn.addEventListener('click', checkEmail);