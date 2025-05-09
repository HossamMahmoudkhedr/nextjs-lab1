import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center gap-4 h-[65vh]">
			<h1 className="text-6xl font-bold ">Check our new posts</h1>
			<Link
				href={'/posts'}
				className="bg-black text-white py-3 px-4 rounded-xl cursor-pointer">
				Get Started
			</Link>
		</div>
	);
}
