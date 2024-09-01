import { ISignIn } from '@/interfaces';
import { auth } from '@/services/firebase/firebaseService';
import { signInWithEmailAndPassword, User } from 'firebase/auth';

export const loginPass = async (email: string, password: string): Promise<ISignIn> => {
	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		const user: User = userCredential.user;
		return { success: true, user };
	} catch (error: any) {
		return { success: false, user: undefined };
	}
};
