import React from 'react';
// import { posts } from '../data/posts';
import Link from 'next/link';
import { fetchData } from '../utils/helper';

export default async function page() {
	const data = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts = await data.json();
	return (
		<div className="mt-10">
			<div className="flex flex-col gap-4">
				<h2 className="ms-6 font-bold text-xl">Posts</h2>
				<div className="flex gap-3 flex-wrap justify-center">
					{posts?.map((post) => (
						<div
							key={post.id}
							className="relative w-[24%] flex flex-col gap-5 justify-between shadow-lg rounded-3xl py-3 px-4">
							<Link
								href={`/posts/${post.id}`}
								className="absolute start-0 top-0 w-[100%] h-[100%] z-[1]"></Link>
							<div className="flex flex-col gap-1">
								<h4 className="font-bold text-lg">{post.title}</h4>
								<p className="text-gray-400 text-sm">
									{post.body.substr(0, 40)}...
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
