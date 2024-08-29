import { auth } from '@/services/firebase/firebaseService';
import { signInWithEmailAndPassword, User } from 'firebase/auth';

export const loginPass = async (email: string, password: string): Promise<User | undefined> => {
	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		const user: User = userCredential.user;
		console.log(user);
		return user;
	} catch (error: any) {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.error(`Error ${errorCode}: ${errorMessage}`);
	}
};
