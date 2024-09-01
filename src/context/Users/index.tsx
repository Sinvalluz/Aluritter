'use client';

import { ISignIn, IUserContext } from '@/interfaces';
import { loginPass } from '@/utils/loginPass';
import { registerPass } from '@/utils/registerPass';
import { User } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { createContext, useState } from 'react';

export const UserContext = createContext<IUserContext>({} as IUserContext);

export function UserProvider({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const signUp = async (email: string, password: string) => {
		const { success, user, isEmail } = await registerPass(email, password);
		if (!user) {
			throw new Error('Usuário ja existe');
		}
		if (isEmail) {
			return { success, message: 'Ocorreu um erro ao se cadastrar, tente novamente.' };
		}
		setUser(user);
		localStorage.setItem('@userInfos', JSON.stringify(user));
		router.push(`/home/${user.uid}`);
		return { success, message: '' };
	};

	const signIn = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
		const { success, user } = await loginPass(email, password);
		if (!user) {
			return { success, message: 'O Email ou a senha está incorreto' };
		}
		router.push(`/home/${user.uid}`);
		localStorage.setItem('@userInfos', JSON.stringify(user));
		return { success, message: '' };
	};

	const signOut = async () => {
		await localStorage.removeItem('@userInfos');
		setUser({} as User);
		console.log('oi');
		router.push('./login');
	};

	const [user, setUser] = useState<User>({} as User);

	return <UserContext.Provider value={{ user, setUser, signUp, signIn, signOut }}>{children}</UserContext.Provider>;
}
