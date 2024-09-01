'use client';

import Form from '../Form';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context';
import { useContext, useEffect } from 'react';
import { User } from 'firebase/auth';

export default function FormLogin() {
	const router = useRouter();
	const { user, setUser, signIn } = useContext(UserContext);

	useEffect(() => {
		function e() {
			let userLocal = localStorage.getItem('@userInfos');
			if (userLocal) {
				const user: User = JSON.parse(userLocal);
				router.push(`./home/${user.uid}`);
			}
		}
		e();
	}, []);

	const onsubmit = async (email: string, password: string): Promise<any> => {
		const { success, message } = await signIn(email, password);
		if (!success) {
			return { success, message };
		}
		return { success, message };
	};

	return (
		<Form
			ButtonText='Acessar plataforma'
			Onsubmit={onsubmit}
		/>
	);
}
