import { auth } from '@/services/firebase/firebaseService';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const registerPass = async (email: string, password: string) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		const user = userCredential.user;
		return true;
	} catch (error: any) {
		if (error.code === 'auth/email-already-in-use') {
			return false;
		} else {
			// Tratar outros erros
			console.error('Ocorreu um erro. Por favor, tente novamente.');
		}
	}
};
