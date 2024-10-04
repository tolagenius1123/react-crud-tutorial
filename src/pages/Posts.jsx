import axios from "axios";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import { useEffect, useState } from "react";

const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const data = [
		{
			id: 1,
			title: "First Post",
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore maxime obcaecati, et nisi animi cum, ab consectetur, voluptates officia soluta delectus optio quia quod nesciunt assumenda ipsam fugiat eos exercitationem!",
			author: "Judeen",
		},
		{
			id: 2,
			title: "Second Post",
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore maxime obcaecati, et nisi animi cum, ab consectetur, voluptates officia soluta delectus optio quia quod nesciunt assumenda ipsam fugiat eos exercitationem!",
			author: "Simon Cowel",
		},
		{
			id: 3,
			title: "Third Post",
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore maxime obcaecati, et nisi animi cum, ab consectetur, voluptates officia soluta delectus optio quia quod nesciunt assumenda ipsam fugiat eos exercitationem!",
			author: "John Wick",
		},
	];

	const fetchPosts = async () => {
		try {
			setIsLoading(true);
			setTimeout(async () => {
				const result = await axios.get("http://localhost:3000/posts");
				console.log(result);
				setPosts(result.data);
				setIsLoading(false);
			}, 2000);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		// LIFE CYCLE METHODS
		fetchPosts();
	}, []);

	return (
		<div>
			<Navbar />
			<div className="h-auto p-10">
				<h1 className="text-center font-bold text-2xl">
					View Latest Post
				</h1>
				{isLoading ? (
					<div className="text-center font-semibold text-lg mt-5">
						Loading Posts...
					</div>
				) : (
					<div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
						{posts.map((post) => (
							<PostCard
								id={post.id}
								title={post.title}
								description={post.description.slice(0, 60)}
								author={post.author}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Posts;
