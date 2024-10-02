import { useState } from "react";
import Navbar from "../components/Navbar";
import Logo from "../assets/images/blog-logo.svg";
import CustomButton from "../components/CustomButton";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const [post, setPost] = useState({
		title: "",
		description: "",
		author: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setPost((prevState) => {
			return { ...prevState, [name]: value };
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			setTimeout(async () => {
				const result = await axios.post(
					"http://localhost:3000/posts",
					post
				);
				console.log(result); // Promise

				if (result.status === 201) {
					setIsLoading(false);
					toast.success("Post added successfully!");

					setTimeout(() => {
						navigate("/posts");
					}, 2000);
				}
			}, 3000);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	return (
		<div>
			<Navbar />
			<div className="h-[80vh] w-full flex flex-col md:flex-row items-center">
				<div className="mt-2 md:mt-0 h-full w-full md:w-1/2 flex items-center justify-center p-10">
					<img src={Logo} alt="logo" className="h-[300px] w-full" />
				</div>
				<div className="h-full w-full md:w-1/2 flex flex-col items-center justify-center p-10">
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
				</div>
			</div>
		</div>
	);
};

export default AddPost;
