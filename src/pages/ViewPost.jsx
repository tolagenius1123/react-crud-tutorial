import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Logo from "../assets/images/blog-logo.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CustomButton from "../components/CustomButton";
import toast from "react-hot-toast";

const ViewPost = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [post, setPost] = useState({});
	const [editedPost, setEditedPost] = useState({
		title: "",
		description: "",
		author: "",
	});

	const [isEditing, setIsEditing] = useState(false);

	const fetchPost = async () => {
		try {
			const result = await axios.get(`http://localhost:3000/posts/${id}`);
			console.log(result);
			setPost(result.data);
		} catch (error) {
			console.log(error);
		}
	};

	const deletePost = async () => {
		try {
			const result = await axios.delete(
				`http://localhost:3000/posts/${id}`
			);
			console.log(result);
			if (result.status === 200) {
				toast.success("Post deleted successfully");
				navigate("/posts");
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		// LIFE CYCLE METHODS
		fetchPost();
	}, []);

	useEffect(() => {
		setEditedPost((prevPost) => ({
			...prevPost,
			title: post.title,
			description: post.description,
			author: post.author,
		}));
	}, [post]);

	console.log(editedPost);

	return (
		<div>
			<Navbar />
			<div className="h-[80vh] w-full flex flex-col md:flex-row items-center">
				<div className="mt-2 md:mt-0 h-full w-full md:w-1/2 flex items-center justify-center p-10">
					<img src={Logo} alt="logo" className="h-[300px] w-full" />
				</div>
				<div className="h-full w-full md:w-1/2 flex flex-col items-center justify-center p-10">
					<form>
						<div className="mx-auto w-auto h-auto p-10 flex flex-col gap-2 rounded-lg shadow-md cursor-pointer hover:shadow-lg">
							{isEditing ? (
								<input
									type="text"
									name="title"
									id="title"
									className={`px-2 h-[40px] border rounded-md w-full text-sm "outline-zinc-400 ring-zinc-300 border-zinc-300`}
									placeholder="Enter title"
									value={editedPost.title}
								/>
							) : (
								<h1 className="text-xl font-bold">
									{post.title}
								</h1>
							)}

							{isEditing ? (
								<textarea
									name="description"
									id="description"
									rows={5}
									className={`rounded-md resize-none p-2 text-sm w-full border outline-zinc-400 ring-zinc-300 border-zinc-300`}
									placeholder="Write content of post here"
									value={editedPost.description}
								></textarea>
							) : (
								<p className="text-lg">{post.description}</p>
							)}
							{isEditing ? (
								<input
									type="text"
									name="author"
									id="author"
									className={`px-2 h-[40px] border rounded-md w-full text-sm outline-zinc-400 ring-zinc-300 border-zinc-300`}
									placeholder="Enter author"
									value={editedPost.author}
								/>
							) : (
								<div className="flex justify-end">
									<p className="text-lg font-semibold">
										Author - {post.author}
									</p>
								</div>
							)}
							<div className="mt-2 flex justify-end">
								<div className="flex gap-3 items-center">
									{isEditing && (
										<>
											<CustomButton
												btnType={"button"}
												btnTitle={"Cancel"}
												btnStyles="px-4 py-2 w-full text-center bg-blue-500 text-white rounded-md cursor-pointer hover:bg-zinc-700"
												btnAction={() =>
													setIsEditing(false)
												}
											/>
											<CustomButton
												btnType={"button"}
												btnTitle={"Save"}
												btnStyles="px-4 py-2 w-full text-center bg-blue-500 text-white rounded-md cursor-pointer hover:bg-zinc-700"
												btnAction={() => {}}
											/>
										</>
									)}
									{isEditing === false && (
										<CustomButton
											btnType={"button"}
											btnTitle={"Edit"}
											btnStyles="px-4 py-2 w-full text-center bg-blue-500 text-white rounded-md cursor-pointer hover:bg-zinc-700"
											btnAction={() => setIsEditing(true)}
										/>
									)}
									<CustomButton
										btnType={"button"}
										btnTitle={"Delete"}
										btnStyles="px-4 py-2 w-full text-center bg-red-500 text-white rounded-md cursor-pointer hover:bg-zinc-700"
										btnAction={() => deletePost()}
									/>
								</div>
							</div>
						</div>
					</form>
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
