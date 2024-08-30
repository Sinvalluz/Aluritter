import Title from '@/components/Title';
import Link from 'next/link';
import FormLogin from '@/components/FormLogin';

export default function Login() {
	return (
		<main className='w-full min-h-screen flex items-center justify-center'>
			<div className='w-4/5 max-w-96 text-center'>
				<Title />
				<FormLogin />
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
