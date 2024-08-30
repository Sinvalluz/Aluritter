'use client';

import { loginPass } from '@/utils/loginPass';
import Form from '../Form';
import { useRouter } from 'next/navigation';
import { UseUserContext } from '@/context';

export default function FormLogin() {
	const router = useRouter();
	const { userLog, setUserLog } = UseUserContext();

	const onsubmit = async (email: string, pass: string): Promise<string | void> => {
		const user = await loginPass(email, pass);

		if (!user) {
			return;
		}
		const userEmail = user.email || ''; // Substitua por um valor padrão ou trate de outra forma
		console.log(userEmail);
		setUserLog(userEmail);
		router.push(`/home/${user?.uid}`);
	};

	return (
		<Form
			ButtonText='Acessar plataforma'
			Onsubmit={onsubmit}
		/>
	);
}
