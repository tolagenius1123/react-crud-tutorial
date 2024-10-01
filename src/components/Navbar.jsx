import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="bg-zinc-900 text-white py-4 px-10 md:px-20 flex items-center justify-between">
			<Link to="/" className="text-xl md:text-2xl">
				TechBlog
			</Link>
			<div className="flex items-center gap-5">
				<Link to="/add-post" className="text-sm md:text-lg">
					Add Post
				</Link>
				<Link to="/posts" className="text-sm md:text-lg">
					Posts
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
