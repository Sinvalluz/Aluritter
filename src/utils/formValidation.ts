const formValidation = (email: string, pass: string) => {
	if (!email && !pass) {
		return 'Os campos de email e senha devem estar preenchidos';
	}
	if (!email) {
		return 'O campo de email deve estar preenchido';
	}
	if (!pass) {
		return 'O campo de senha deve estar preenchido';
	}
	return true;
};

export default formValidation;
