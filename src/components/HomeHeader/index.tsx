import Link from 'next/link';
import Title from '../Title';

export default function HomeHeader() {
	return (
		<header className='sm:h-11'>
			<div className='py-3 sm:px-5 flex items-center flex-col sm:justify-between sm:flex-row'>
				<div className='flex justify-between items-center w-full sm:w-auto px-5'>
					<Link href={'/'}>
						<Title className='text-lg text-center' />
					</Link>
					<Link
						href={'/login'}
						className='py-1 px-2 bg-btnColorExit text-white rounded sm:hidden'>
						sair
					</Link>
				</div>
				<div className='flex items-center gap-3'>
					<p>contato.sinvalluz@gmail.com</p>
					<Link
						href={'/login'}
						className='py-1 px-2 bg-btnColorExit text-white rounded hidden sm:block'>
						sair
					</Link>
				</div>
			</div>
		</header>
	);
}
