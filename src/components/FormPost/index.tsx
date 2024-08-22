'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface Iform {
	text: string;
}

interface DataType {
	text: string;
}

export default function FormPost() {
	const [message, setMessage] = useState('');
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Iform>();

	const onSubmit = (data: DataType) => {
		if (data.text !== '') {
			console.log(data.text);
			reset();
		}
	};
	return (
		<form
			className='flex flex-col gap-3'
			onSubmit={handleSubmit(onSubmit)}>
			<label>Alurite agora mesmo...</label>
			<textarea
				className='flex-grow min-h-28 max-h-52 p-4'
				{...register('text')}
				maxLength={255}
				placeholder='Escreva oque está pensando:'
				onChange={(event) => setMessage(event.target.value)}
				value={message}
			/>
			<div className='flex justify-between items-center'>
				{message.length < 255 ? (
					<p className='text-formLeagth select-none text-xs sm:text-sm'>
						Você ainda pode digitar {255 - message.length} caracteres
					</p>
				) : (
					<p className='text-xs sm:text-sm  text-red-600'>Você esgotou a quantidade de caracteres</p>
				)}
				<button
					type='submit'
					className='p-2 bg-btnBackgroundPost rounded text-white select-none'>
					aluritar
				</button>
			</div>
		</form>
	);
}
