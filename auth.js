function authenticate(login, password) {
	if (login === 'login' || password === 'password') {
		return 'You were login in';
	} else {
		return 'Login is incorrect!!!!';
	}
}