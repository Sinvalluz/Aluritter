'use client';

import HomeHeader from '@/components/HomeHeader';
import Main from '@/components/Main';
import { UseUserContext } from '@/context';

interface HomeProps {
	params: any;
}

export default function Home({ params }: HomeProps) {
	const { userLog, setUserLog } = UseUserContext();
	return (
		<div className='bg-backgroundHome min-h-screen flex flex-col'>
			<HomeHeader email={userLog} />
			<Main />
		</div>
	);
}
