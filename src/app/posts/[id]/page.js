import { categories, posts } from '@/app/data/posts';
import React from 'react';
import NotFound from './not-found';
import { fetchData } from '@/app/utils/helper';

export default async function page({ params }) {
	const { id } = await params;
	const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const post = await data.json();

	const commentsData = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}/comments`
	);

	const comments = await commentsData.json();
	return (
		<div className=" p-5 flex flex-col gap-4 ">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl">{post.title}</h1>
			</div>
			<div className="flex flex-col gap-2">
				<p>{post.body}</p>
			</div>
			<h3 className="text-xl font-bold my-2">Comments</h3>
			<div className="flex flex-col gap-2">
				{comments?.map((comment) => (
					<div className="flex flex-col gap-3 border-b pb-3">
						<div className="flex flex-col gap-1">
							<p>{comment.name}</p>
							<p>{comment.email}</p>
						</div>
						<p>{comment.body}</p>
					</div>
				))}
			</div>
		</div>
	);
}
