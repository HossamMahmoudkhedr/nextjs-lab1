'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

export default async function page({ params }) {
	const { id } = await params;

	const userData = await fetch(
		`https://jsonplaceholder.typicode.com/users/${id}`
	);
	const user = await userData.json();

	const userPosts = await fetch(
		`https://jsonplaceholder.typicode.com/users/${id}/posts`
	);
	const posts = await userPosts.json();
	return (
		<div className="m-5">
			<div className="flex flex-col gap-2">
				<p>{user.name}</p>
				<p>
					{user.username} | {user.email}
				</p>
			</div>
			<div className="my-3">
				<h3 className="text-xl font-bold">Posts</h3>
			</div>
			<div className="flex flex-col gap-4">
				{posts.map((post) => (
					<div className="relative flex flex-col gap-4 border rounded-xl">
						<Link
							className="absolute top-0 end-0 w-[100%] h-[100%]"
							href={`/posts/${post.id}`}></Link>
						<div className="flex items-center justify-between">
							<h1 className="text-2xl">{post.title}</h1>
						</div>
						<div className="flex flex-col gap-2">
							<p>{post.body}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
