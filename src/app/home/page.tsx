'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Main from '@/components/Main';
import HomeHeader from '@/components/HomeHeader';
import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { auth } from '@/services/firebase/firebaseService';

export default function Home() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [user, setUser] = useState<User | null>(null);
	return (
		<div className='bg-backgroundHome min-h-screen flex flex-col'>
			<HomeHeader email={'sei la'} />
			<Main />
		</div>
	);
}
