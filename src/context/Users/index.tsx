'use client';

import { IUserContext } from '@/interfaces';
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
		setUser(user);
		localStorage.setItem('@userInfos', JSON.stringify(user));
		router.push(`/home/${user.uid}`);
		return { success, isEmail };
	};

	const [user, setUser] = useState<User>({} as User);

	return <UserContext.Provider value={{ user, setUser, signUp }}>{children}</UserContext.Provider>;
}
