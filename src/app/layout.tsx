import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
	title: 'Aluritter',
	description: 'Making a copy of twitter',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='pt-br'>
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
