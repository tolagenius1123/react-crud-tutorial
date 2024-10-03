import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Logo from "../assets/images/blog-logo.svg";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewPost = () => {
	const { id } = useParams();

	const [post, setPost] = useState({});

	const fetchPost = async () => {
		try {
			const result = await axios.get(`http://localhost:3000/posts/${id}`);
			console.log(result);
			setPost(result.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		// LIFE CYCLE METHODS
		fetchPost();
	}, []);

	return (
		<div>
			<Navbar />
			<div className="h-[80vh] w-full flex flex-col md:flex-row items-center">
				<div className="mt-2 md:mt-0 h-full w-full md:w-1/2 flex items-center justify-center p-10">
					<img src={Logo} alt="logo" className="h-[300px] w-full" />
				</div>
				<div className="h-full w-full md:w-1/2 flex flex-col items-center justify-center p-10">
					<div className="mx-auto w-auto h-auto p-10 flex flex-col gap-2 rounded-lg shadow-md cursor-pointer hover:shadow-lg">
						<h1 className="text-xl font-bold">{post.title}</h1>
						<p className="text-lg">{post.description}</p>
						<div className="flex justify-end">
							<p className="text-lg font-semibold">
								Author - {post.author}
							</p>
						</div>
					</div>
				</div>
				{/* <div className="h-full w-full md:w-1/2 flex flex-col items-center justify-center p-10">
					<h1 className="text-xl font-bold">Create a Post ✍</h1>
					<form
						onSubmit={handleSubmit}
						className="mt-3 mx-auto w-full md:w-[400px] h-auto"
					>
						<div className="">
							<input
								type="text"
								name="title"
								id="title"
								className={`px-2 h-[40px] border rounded-md w-full text-sm "outline-zinc-400 ring-zinc-300 border-zinc-300`}
								placeholder="Enter title"
								value={post.title}
								onChange={handleChange}
							/>
						</div>
						<div className="mt-2">
							<textarea
								name="description"
								id="description"
								rows={5}
								className={`rounded-md resize-none p-2 text-sm w-full border outline-zinc-400 ring-zinc-300 border-zinc-300`}
								placeholder="Write content of post here"
								value={post.description}
								onChange={handleChange}
							></textarea>
						</div>
						<div className="mt-2">
							<input
								type="text"
								name="author"
								id="author"
								className={`px-2 h-[40px] border rounded-md w-full text-sm outline-zinc-400 ring-zinc-300 border-zinc-300`}
								placeholder="Enter author"
								value={post.author}
								onChange={handleChange}
							/>
						</div>
						<div className="">
							<CustomButton
								btnType={"submit"}
								btnTitle={
									isLoading ? "Submitting..." : "Submit"
								}
								btnStyles="mt-4 py-2 w-full text-center bg-zinc-900 text-white rounded-md cursor-pointer hover:bg-zinc-700"
							/>
						</div>
					</form>
				</div> */}
			</div>
		</div>
	);
};

export default ViewPost;
