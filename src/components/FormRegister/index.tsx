'use client';

import Form from '../Form';
import { useContext } from 'react';
import { UserContext } from '@/context';

export default function FormRegister() {
	const { signUp } = useContext(UserContext);

	const onsubmitSignUP = async (email: string, password: string) => {
		const { success, isEmail } = await signUp(email, password);
		if (!isEmail) {
			return { success, message: 'Erro ao cadastra o email' };
		}
		return { success };
	};

	return (
		<Form
			ButtonText='Criar uma nova conta'
			onSubmitForm={onsubmitSignUP}
		/>
	);
}
