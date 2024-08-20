'use client';

import ButtonSubmit from '@/components/ButtonSubmit';
import Input from '@/components/Input';
import Title from '@/components/Title';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface Iform {
	email: string;
	senha: string;
}

export default function register() {
	const { register, handleSubmit, reset } = useForm<Iform>();
	const [erro, setErro] = useState(false);

	const onSubmit = (data: Iform) => {
		if (data.email !== '' && data.senha !== '') {
			setErro(!erro);
			console.log(data);
			reset();
			return;
		}
		setErro(true);
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
					<ButtonSubmit children='Criar uma nova conta'></ButtonSubmit>
					{erro && <p className='absolute text-red-500 top-28'>Preencha os campos de forma correta</p>}
				</form>

				<span className='flex gap-1  itens-center justify-center flex-wrap'>
					<p>Já possui uma conta?</p>
					<Link
						href={'/'}
						className='text-link'>
						Acesse agora!
					</Link>
				</span>
			</div>
		</main>
	);
}
