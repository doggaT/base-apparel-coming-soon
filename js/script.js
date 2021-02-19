'use strict';

const form = document.querySelector('form');

const submitBtn = document.querySelector('button');
const email = document.getElementById('email');
const errorIcon = document.querySelector('.fa-exclamation-circle');
const successIcon = document.querySelector('.fa-check-circle');

function isEmail(email) {
	const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return pattern.test(String(email).toLowerCase());
}

email.addEventListener('invalid', e => {
	e.preventDefault();
});

form.addEventListener('submit', e => {
	e.preventDefault();

	const emailValue = email.value.trim();
	const small = form.querySelector('small');

	if (!isEmail(emailValue) || emailValue === '') {
		small.style.visibility = 'visible';
		errorIcon.style.visibility = 'visible';
		successIcon.style.visibility = 'hidden';
		email.classList.add('error');
		email.classList.remove('success');
	} else {
		small.style.visibility = 'hidden';
		errorIcon.style.visibility = 'hidden';
		successIcon.style.visibility = 'visible';
		email.classList.add('success');
	}
});

form.addEventListener('keydown', e => {
	const emailValue = email.value.trim();
	const small = form.querySelector('small');

	if (!isEmail(emailValue) || emailValue === '') {
		small.style.visibility = 'visible';
		errorIcon.style.visibility = 'visible';
		successIcon.style.visibility = 'hidden';
		email.classList.add('error');
		email.classList.remove('success');
	} else {
		small.style.visibility = 'hidden';
		errorIcon.style.visibility = 'hidden';
		successIcon.style.visibility = 'visible';
		email.classList.add('success');
	}
});
