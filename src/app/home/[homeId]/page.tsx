'use client';

import HomeHeader from '@/components/HomeHeader';
import Main from '@/components/Main';
import { UserContext } from '@/context';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';

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

	if (user && user.email) {
		return (
			<div className='bg-backgroundHome min-h-screen flex flex-col'>
				<HomeHeader email={user.email} />
				<Main />
			</div>
		);
	}
}
