import { UseFormRegisterReturn } from 'react-hook-form';

interface InputTypes {
	type: 'email' | 'password';
	placeholder: string;
	register: UseFormRegisterReturn;
}

export default function Input({ type, placeholder, register }: InputTypes) {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className='px-2 py-3 grow placeholder:text-placeholder text-base border-border border rounded outline-none'
			{...register}
		/>
	);
}
