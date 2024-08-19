import Title from '@/components/Title';

export default function NotFound() {
	return (
		<div className='w-full h-screen flex flex-col justify-center text-center'>
			<Title />
			<h2 className='text-8xl sm:text-9xl'>404</h2>
			<p className='text-2xl'>Página não encontrada</p>
		</div>
	);
}
