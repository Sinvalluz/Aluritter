import FormRegister from '@/components/FormRegister';
import Title from '@/components/Title';
import Link from 'next/link';

export default function register() {
	return (
		<main className='w-full min-h-screen flex items-center justify-center'>
			<div className='w-4/5 max-w-96 text-center'>
				<Title />
				<FormRegister />

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
