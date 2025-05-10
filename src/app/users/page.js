import Link from 'next/link';
import React from 'react';

export default async function page() {
	const data = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await data.json();
	return (
		<div className="flex flex-col gap-4 my-3 mx-5">
			{users?.map((user) => (
				<div className="relative flex flex-col gap-2 border rounded-xl p-4">
					<Link
						className="absolute top-0 start-0 w-[100%] h-[100%] z-[1]"
						href={`/users/${user.id}`}></Link>
					<p className="text-lg font-bold">{user.name}</p>
					<p>
						{user.username} | {user.email}
					</p>
				</div>
			))}
		</div>
	);
}
