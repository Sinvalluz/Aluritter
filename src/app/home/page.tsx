'use client';

import Main from '@/components/Main';
import HomeHeader from '@/components/HomeHeader';
import { useContext, useEffect } from 'react';
import { UserContext } from '@/context';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();
	const { user, signed, setUser } = useContext(UserContext);
	useEffect(() => {
		if (!signed) {
			const userToken = localStorage.getItem('@userInfos');
			if (userToken) {
				setUser(JSON.parse(userToken));
				if (user) {
					router.push(`/home/${user?.uid}`);
				}
			}
		}
	}, []);
	return (
		<div className='bg-backgroundHome min-h-screen flex flex-col'>
			<HomeHeader email={'email'} />
			<Main />
		</div>
	);
}
