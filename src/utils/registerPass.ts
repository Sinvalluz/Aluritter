import { auth } from '@/services/firebase/firebaseService';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const registerPass = async (email: string, password: string) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		const user = userCredential.user;
		return { success: true, user, message: '' };
	} catch (error: any) {
		if (error.code === 'auth/email-already-in-use') {
			return {
				success: false,
				message: 'Já existe uma conta com esse email registrado, tente novamente ou acesse sua conta',
			};
		} else {
			return { success: false, message: 'Ocorreu um erro. Por favor, tente novamente.' };
		}
	}
};
