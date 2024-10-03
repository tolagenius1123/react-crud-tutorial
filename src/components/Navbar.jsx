import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const { pathname } = useLocation();

	return (
		<div className="bg-zinc-900 text-white py-4 px-10 md:px-20 flex items-center justify-between">
			<Link to="/" className="text-xl md:text-2xl">
				TechBlog
			</Link>
			<div className="flex items-center gap-5">
				<Link
					to="/posts"
					className={`text-sm md:text-lg ${
						pathname === "/posts" ? "text-white" : "text-zinc-400"
					}`}
				>
					Posts
				</Link>
				<Link
					to="/add-post"
					className={`text-sm md:text-lg ${
						pathname === "/add-post"
							? "text-white"
							: "text-zinc-400"
					}`}
				>
					Add Post
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
