import { User } from 'firebase/auth';
import { SetStateAction } from 'react';

export interface Iform {
	email: string;
	senha: string;
}

export interface ISignUp {
	success: boolean;
	message: string;
}

export interface ISignIn {
	success: boolean;
	user: User | undefined;
}

export interface IUserContext {
	user: User;
	setUser: React.Dispatch<SetStateAction<User>>;
	signUp: (email: string, password: string) => Promise<ISignUp>;
	signIn: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
	signOut: () => void;
}
