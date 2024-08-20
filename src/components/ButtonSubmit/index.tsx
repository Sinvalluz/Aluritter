interface ButtonSubmitTypes {
	children: string;
	typeButton?: 'submit' | 'reset' | 'button' | undefined;
}

export default function ButtonSubmit({ children, typeButton = 'submit' }: ButtonSubmitTypes) {
	return (
		<button
			className='grow text-btnColor text-base bg-btnBackground py-3 text-center rounded block mb-1 mt-8'
			type={typeButton}>
			{children}
		</button>
	);
}
