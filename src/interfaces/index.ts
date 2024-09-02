import { User } from 'firebase/auth';
import { SetStateAction } from 'react';

export interface Iform {
	email: string;
	senha: string;
}

export interface ISignUp {
	success: boolean;
	isEmail: boolean;
}

export interface ISignIn {
	success: boolean;
	isEmailPass: boolean;
}

export interface IOnSubmitSignUP {
	success: boolean;
	message?: string;
}
export interface IOnSubmitSignIn {
	success: boolean;
	message?: string;
}

export interface IUserContext {
	user: User | undefined;
	setUser: React.Dispatch<SetStateAction<User | undefined>>;
	signUp: (email: string, password: string) => Promise<ISignUp>;
	signIn: (email: string, password: string) => Promise<ISignIn>;
	signOut: () => void;
	signed: boolean;
}
