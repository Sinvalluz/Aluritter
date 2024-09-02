import { UserContext } from '@/context';
import { useContext } from 'react';

export default function Aluritters() {
	const Data: Date = new Date();
	const { user } = useContext(UserContext);
	return (
		<div>
			<div className='bg-white p-5 rounded'>
				<span className='block mb-8 text-textPost'>Seven7OfCode com React =DDD</span>
				<div className='flex flex-col sm:justify-between  sm:flex-row'>
					<p className='sm:text-sm text-xs'>{user ? user.email : ''}</p>
					<p className='text-textPost'>
						{Data.toLocaleString('pt-br', {
							day: '2-digit',
							month: '2-digit',
							year: 'numeric',
							hour: 'numeric',
							minute: 'numeric',
						})}
					</p>
				</div>
			</div>
		</div>
	);
}
