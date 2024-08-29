'use client';

import ButtonSubmit from '@/components/ButtonSubmit';
import Input from '@/components/Input';
import Title from '@/components/Title';
import Iform from '@/interfaces/Form';
import { registerPass } from '@/utils/registerPass';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function register() {
	const { register, handleSubmit, reset } = useForm<Iform>();
	const [erro, setErro] = useState(false);
	const [existeConta, setExisteConta] = useState(false);
	const router = useRouter();

	const onSubmit = async (data: Iform) => {
		if (data.email && data.senha) {
			const verificacao = await registerPass(data.email, data.senha);
			if (!verificacao) {
				setExisteConta(true);
				setErro(false);
				reset();
				return;
			}

			router.push('/home');
			setExisteConta(false);
			reset();
			return;
		}
		setExisteConta(false);
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
					<ButtonSubmit>Criar uma nova conta</ButtonSubmit>
					{erro && <p className='absolute text-red-500 top-28'>Preencha os campos de forma correta</p>}
					{existeConta && <p className='absolute text-red-500 top-28'>Ja existe uma conta com esse email</p>}
				</form>

				<span className='flex gap-1  itens-center justify-center flex-wrap'>
					<p>Já possui uma conta?</p>
					<Link
						href={'/login'}
						className='text-link'>
						Acesse agora!
					</Link>
				</span>
			</div>
		</main>
	);
}
