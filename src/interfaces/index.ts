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

export interface IUserContext {
	user: User;
	setUser: React.Dispatch<SetStateAction<User>>;
	signUp: (email: string, password: string) => Promise<ISignUp>;
}
