import Link from 'next/link';
import Title from '../Title';
import { useContext } from 'react';
import { UserContext } from '@/context';

interface HomeHeaderProps {
	email: string;
}

export default function HomeHeader({ email }: HomeHeaderProps) {
	const { signOut } = useContext(UserContext);
	return (
		<header className='sm:h-11'>
			<div className='py-3 sm:px-5 flex items-center flex-col sm:justify-between sm:flex-row'>
				<div className='flex justify-between items-center w-full sm:w-auto px-5'>
					<Link href={'/'}>
						<Title className='text-lg text-center' />
					</Link>
					<button
						type='button'
						onClick={() => signOut()}
						className='py-1 px-2 bg-btnColorExit text-white rounded sm:hidden'>
						sair
					</button>
				</div>
				<div className='flex items-center gap-3'>
					<p>{email}</p>
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
