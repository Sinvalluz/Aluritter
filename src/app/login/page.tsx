'use client';

import ButtonSubmit from '@/components/ButtonSubmit';
import Input from '@/components/Input';
import Title from '@/components/Title';
import Iform from '@/interfaces/Form';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export default function Login() {
	const { register, handleSubmit, reset } = useForm<Iform>();

	const onSubmit = (data: Iform) => {
		if (data.email === '' && data.senha === '') {
			reset();
			return;
		}
		console.log(`Email: ${data.email}`);
		console.log(`Senha: ${data.senha}`);
	};

	return (
		<main className='w-full min-h-screen flex items-center justify-center'>
			<div className='w-4/5 max-w-96 text-center'>
				<Title />
				<form
					onSubmit={handleSubmit(onSubmit)}
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
