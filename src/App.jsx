import Navbar from "./components/Navbar";
import Logo from "./assets/images/blog-logo.svg";
import CustomButton from "./components/CustomButton";
import { useNavigate } from "react-router-dom";

function App() {
	const navigate = useNavigate();

	return (
		<main className="h-screen w-full">
			<Navbar />
			<div className="h-[80vh] w-full flex flex-col md:flex-row items-center">
				<div className="h-full w-full md:w-1/2 flex items-center justify-center p-10">
					<img src={Logo} alt="logo" className="h-[300px] w-full" />
				</div>
				<div className="h-full w-full md:w-1/2 flex items-center p-10">
					<div className="">
						<h1 className="text-[40px] font-bold">
							Welcome to my Blog
						</h1>
						<p className="text-lg font-semibold">
							Get updated with the latest trend in the tech world
						</p>
						<CustomButton
							btnTitle="View Posts"
							btnStyles="mt-2 py-2 px-4 text-center bg-zinc-900 text-white rounded-[10px] cursor-pointer"
							btnAction={() => navigate("/posts")}
						/>
					</div>
				</div>
			</div>
		</main>
	);
}

export default App;
