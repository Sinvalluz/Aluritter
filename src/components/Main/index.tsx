import Aluritters from '../Aluritters';
import FormPost from '../FormPost';

export default function Main() {
	return (
		<main className='flex w-screen justify-center'>
			<div className='p-2 sm:p-10 lg:w-8/12 md:w-3/4 w-full flex flex-col gap-5'>
				<FormPost />
				<Aluritters />
			</div>
		</main>
	);
}
