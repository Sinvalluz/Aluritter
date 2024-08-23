interface TitleProps {
	className?: string;
}

export default function Title({ className }: TitleProps) {
	return <h1 className={` text-3xl text-title font-normal ${className} `}>Aluritter</h1>;
}
