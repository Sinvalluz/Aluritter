import Main from '@/components/Main';
import HomeHeader from '@/components/HomeHeader';

export default function Home() {
	return (
		<div className='bg-backgroundHome min-h-screen flex flex-col'>
			<HomeHeader />
			<Main />
		</div>
	);
}
