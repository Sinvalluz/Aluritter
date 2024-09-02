'use client';

import { IUserContext } from '@/interfaces';
import { loginPass } from '@/utils/loginPass';
import { registerPass } from '@/utils/registerPass';
import { User } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { createContext, useState } from 'react';

export const UserContext = createContext<IUserContext>({} as IUserContext);

export function UserProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | undefined>(undefined);
	const router = useRouter();
	const signUp = async (email: string, password: string) => {
		const { success, user, isEmail } = await registerPass(email, password);
		if (!user || isEmail) {
			return { success, isEmail };
		}
		setUser(user);
		localStorage.setItem('@userInfos', JSON.stringify(user));
		router.push(`/home/${user.uid}`);
		return { success, isEmail };
	};

	const signIn = async (email: string, password: string) => {
		const { success, user } = await loginPass(email, password);
		if (!user) {
			return { success, isEmailPass: false };
		}
		setUser(user);
		router.push(`/home/${user.uid}`);
		localStorage.setItem('@userInfos', JSON.stringify(user));
		return { success, isEmailPass: true };
	};

	const signOut = () => {
		localStorage.removeItem('@userInfos');
		setUser({} as User);
		router.push('/login');
	};

	return (
		<UserContext.Provider value={{ user, setUser, signUp, signIn, signOut, signed: !!user }}>
			{children}
		</UserContext.Provider>
	);
}
