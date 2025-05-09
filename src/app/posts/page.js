import React from 'react';
import { posts } from '../data/posts';
import Link from 'next/link';

export default function page() {
	return (
		<div className="mt-10">
			<div className="flex flex-col gap-4">
				<h2 className="ms-6 font-bold text-xl">Posts</h2>
				<div className="flex gap-3 flex-wrap justify-center">
					{posts.map((post) => (
						<div
							key={post.id}
							className="relative w-[24%] flex flex-col gap-5 justify-between shadow-lg rounded-3xl py-3 px-4">
							<Link
								href={`/posts/${post.id}`}
								className="absolute start-0 top-0 w-[100%] h-[100%] z-[1]"></Link>
							<div className="flex flex-col gap-1">
								<h4 className="font-bold text-lg">{post.title}</h4>
								<p className="text-gray-400 text-sm">{post.summary}</p>
							</div>
							<span className="border rounded-3xl px-2 py-1 text-xs w-fit">
								{post.category}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
