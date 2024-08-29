'use client';

import ButtonSubmit from '@/components/ButtonSubmit';
import Input from '@/components/Input';
import Title from '@/components/Title';
import Iform from '@/interfaces/Form';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { loginPass } from '@/utils/loginPass';

export default function Login() {
	const router = useRouter();
	const { register, handleSubmit, reset } = useForm<Iform>();

	const onSubmitLogin = async (data: Iform) => {
		try {
			if (!data.email || !data.senha) {
				throw new Error('Email e senha são obrigatórios');
			}

			const user = await loginPass(data.email, data.senha);

			if (user) {
				router.push(`/home?uid=${user.uid}`);
				console.log(user);
			} else {
				console.error('Login failed: User is undefined');
				reset();
			}
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message);
			} else {
				console.error('An unexpected error occurred');
			}
			reset();
		}
	};

	return (
		<main className='w-full min-h-screen flex items-center justify-center'>
			<div className='w-4/5 max-w-96 text-center'>
				<Title />
				<form
					onSubmit={handleSubmit(onSubmitLogin)}
					className='flex flex-col mt-5 relative'>
					<div className='flex flex-col gap-3'>
						<Input
							placeholder='email@exemplo.com'
							register={register('email')}
							type='email'
						/>
						<Input
							placeholder='Senha'
							register={register('senha')}
							type='password'
						/>
					</div>
					<ButtonSubmit>Acessar plataforma</ButtonSubmit>
				</form>

				<span className='flex gap-1  itens-center justify-center flex-wrap'>
					<p>Não possui uma conta?</p>
					<Link
						href={'/register'}
						className='text-link'>
						Crie uma agora!
					</Link>
				</span>
			</div>
		</main>
	);
}
