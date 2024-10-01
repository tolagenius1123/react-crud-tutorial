import Navbar from "../components/Navbar";
import Logo from "../assets/images/blog-logo.svg";
import CustomButton from "../components/CustomButton";

const AddPost = () => {
	return (
		<div>
			<Navbar />
			<div className="h-[80vh] w-full flex flex-col md:flex-row items-center">
				<div className="mt-2 md:mt-0 h-full w-full md:w-1/2 flex items-center justify-center p-10">
					<img src={Logo} alt="logo" className="h-[300px] w-full" />
				</div>
				<div className="h-full w-full md:w-1/2 flex flex-col items-center justify-center p-10">
					<h1 className="text-xl font-bold">Create a Post ✍</h1>
					<form className="mt-3 mx-auto w-full md:w-[400px] h-auto">
						<div className="">
							<input
								type="text"
								name="title"
								id="title"
								className={`px-2 h-[40px] border rounded-md w-full text-sm "outline-zinc-400 ring-zinc-300 border-zinc-300`}
								placeholder="Enter title"
							/>
						</div>
						<div className="mt-2">
							<textarea
								name="description"
								id="description"
								rows={5}
								className={`rounded-md resize-none p-2 text-sm w-full border outline-zinc-400 ring-zinc-300 border-zinc-300`}
								placeholder="Write content of post here"
							></textarea>
						</div>
						<div className="mt-2">
							<input
								type="text"
								name="author"
								id="author"
								className={`px-2 h-[40px] border rounded-md w-full text-sm outline-zinc-400 ring-zinc-300 border-zinc-300`}
								placeholder="Enter author"
							/>
						</div>
						<div className="">
							<CustomButton
								btnTitle="Submit"
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
