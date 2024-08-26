import { auth } from '@/services/firebase/firebaseService';
import { fetchSignInMethodsForEmail } from 'firebase/auth';

export const checkIfEmailExists = async (email: string) => {
	try {
		const signInMethods = await fetchSignInMethodsForEmail(auth, email);
		console.log(signInMethods);
		if (signInMethods.length > 0) {
			console.log('O email já está associado a uma conta existente.');
			return true;
		} else {
			console.log('O email não está associado a nenhuma conta.');
			return false;
		}
	} catch (error) {
		console.error('Erro ao verificar o email:', error);
		return false;
	}
};
