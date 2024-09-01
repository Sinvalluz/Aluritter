'use client';

import Form from '../Form';
import { useContext } from 'react';
import { UserContext } from '@/context';

export default function FormRegister() {
	const { signUp } = useContext(UserContext);

	const onsubmit = async (email: string, password: string) => {
		const { success, message } = await signUp(email, password);
		if (!message) {
			return { success, message };
		}
		return { success, message };
	};

	return (
		<Form
			ButtonText='Criar uma nova conta'
			Onsubmit={onsubmit}
		/>
	);
}
