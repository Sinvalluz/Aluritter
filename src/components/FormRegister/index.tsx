'use client';

import Form from '../Form';
import { useRouter } from 'next/navigation';
import { registerPass } from '@/utils/registerPass';

export default function FormRegister() {
	const router = useRouter();

	const onsubmit = async (email: string, pass: string): Promise<string> => {
		const { success, user, message } = await registerPass(email, pass);
		if (!success) {
			return message;
		}
		router.push(`/home/${user?.uid}`);
		console.log(user?.uid);
		return message;
	};

	return (
		<Form
			ButtonText='Criar uma nova conta'
			Onsubmit={onsubmit}
		/>
	);
}
