'use client';

import HomeHeader from '@/components/HomeHeader';
import Main from '@/components/Main';
import { UserContext } from '@/context';
import { useContext } from 'react';

interface HomeProps {
	params: any;
}

export default function Home({ params }: HomeProps) {
	const { user } = useContext(UserContext);
	return (
		<div className='bg-backgroundHome min-h-screen flex flex-col'>
			<HomeHeader email={user.email} />
			<Main />
		</div>
	);
}
