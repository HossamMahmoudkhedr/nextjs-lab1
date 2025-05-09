'use client';
import React, { useState } from 'react';
import { categories, posts } from '../data/posts';
import Link from 'next/link';

export default function page() {
	const [selectedCategory, setSelectedCategory] = useState('All');

	const filteredPosts =
		selectedCategory === 'All'
			? posts
			: posts.filter((post) => post.category === selectedCategory);

	return (
		<div>
			<div className="flex justify-center mt-4">
				<h3 className="text-2xl font-bold">Categories</h3>
			</div>
			<div className="flex gap-4 justify-center my-5">
				{categories.map((category, index) => (
					<button
						key={index}
						onClick={() => setSelectedCategory(category)}
						className={`${
							selectedCategory === category ? 'bg-black text-white' : ''
						} border rounded-3xl py-1 px-3 cursor-pointer`}>
						{category}
					</button>
				))}
			</div>
			<div className="flex gap-3 flex-wrap justify-center">
				{filteredPosts.map((post) => (
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
	);
}
