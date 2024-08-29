import HomeHeader from '@/components/HomeHeader';
import Main from '@/components/Main';

interface HomeProps {
	params: any;
}

export default function Home({ params }: HomeProps) {
	const decodedEmail = decodeURIComponent(params.homeId);
	return (
		<div className='bg-backgroundHome min-h-screen flex flex-col'>
			<HomeHeader email={decodedEmail} />
			<Main />
		</div>
	);
}
