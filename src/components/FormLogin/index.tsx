'use client';

import { loginPass } from '@/utils/loginPass';
import Form from '../Form';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context';
import { useContext } from 'react';

export default function FormLogin() {
	const router = useRouter();
	const { user, setUser } = useContext(UserContext);

	const onsubmit = async (email: string, pass: string): Promise<string | void> => {
		const user = await loginPass(email, pass);

		if (!user) {
			return;
		}
		const userEmail = user.email || ''; // Substitua por um valor padrão ou trate de outra forma
		console.log(userEmail);
		setUser(userEmail);
		router.push(`/home/${user?.uid}`);
	};

	return (
		<Form
			ButtonText='Acessar plataforma'
			Onsubmit={onsubmit}
		/>
	);
}
