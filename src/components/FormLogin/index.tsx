'use client';

import Form from '../Form';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context';
import { useContext, useEffect } from 'react';
import { User } from 'firebase/auth';

export default function FormLogin() {
	const router = useRouter();
	const { setUser, signIn, signed } = useContext(UserContext);

	useEffect(() => {
		if (signed) {
			const userData = localStorage.getItem('@userInfos');
			if (userData) {
				let jsonUserData: User = JSON.parse(userData);
				router.push(`/home/${jsonUserData.uid}`);
			}
		}
	}, []);

	const onsubmitSignIn = async (email: string, password: string) => {
		const { success, isEmailPass } = await signIn(email, password);
		if (!isEmailPass && !success) {
			return { success, message: 'O email, a senha ou ambos estão incorretos' };
		}
		return { success };
	};

	return (
		<Form
			ButtonText='Acessar plataforma'
			onSubmitForm={onsubmitSignIn}
		/>
	);
}
