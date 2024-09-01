'use client';

import { useForm } from 'react-hook-form';
import ButtonSubmit from '../ButtonSubmit';
import Input from '../Input';
import { useState } from 'react';
import formValidation from '@/utils/formValidation';
import { Iform } from '@/interfaces';

interface FormProps {
	ButtonText: string;
	Onsubmit: (email: string, pass: string) => Promise<string | void>;
}

export default function Form({ ButtonText, Onsubmit }: FormProps) {
	const { register, handleSubmit, reset } = useForm<Iform>();
	const [erroMessage, setErroMessage] = useState<string>('');
	const [erro, setErro] = useState(false);

	const onSubmit = async (data: Iform) => {
		const validation = formValidation(data.email, data.senha);
		if (validation !== true) {
			setErroMessage(validation);
			setErro(true);
			reset();
			return;
		}

		// Chamando Onsubmit para lidar com a criação da conta
		const message = await Onsubmit(data.email, data.senha);
		if (message) {
			setErro(true);
			setErroMessage(message);
			reset();
			return;
		}
		reset();
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col mt-5 gap-2'>
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
			<div className='min-h-12'>{erro ? <p className=' text-red-500 text-start'>{erroMessage}</p> : <></>}</div>

			<ButtonSubmit>{ButtonText}</ButtonSubmit>
		</form>
	);
}
