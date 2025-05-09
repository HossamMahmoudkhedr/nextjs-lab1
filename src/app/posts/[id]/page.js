import { categories, posts } from '@/app/data/posts';
import React from 'react';
import NotFound from './not-found';

export default async function page({ params }) {
	const { id } = await params;
	const post = posts.find((item) => item.id == id);
	if (!post) {
		return NotFound();
		// throw new Error("Can't find this post");
	}
	return (
		<div className=" p-5 flex flex-col gap-4 h-[65vh]">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl">{post.title}</h1>
				<div className="flex gap-4 items-center">
					<span className="border rounded-3xl px-2 py-1 text-xs w-fit">
						{post.category}
					</span>
					<p className="text-sm text-gray-400">{post.date}</p>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<h2 className="text-xl font-bold">Summary</h2>
				<p>{post.summary}</p>
			</div>
		</div>
	);
}
