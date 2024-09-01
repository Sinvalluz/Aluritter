import { auth } from '@/services/firebase/firebaseService';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const registerPass = async (email: string, password: string) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		const user = userCredential.user;
		return { success: true, user, isEmail: false };
	} catch (error: any) {
		if (error.code !== 'auth/email-already-in-use') {
			return { success: false, user: undefined, isEmail: true };
		}
		throw new Error(`Ocorreu um erro ao cadastrar o email e senha: ${error}`);
	}
};
