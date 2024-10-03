import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Posts from "./pages/Posts.jsx";
import AddPost from "./pages/AddPost.jsx";
import { Toaster } from "react-hot-toast";
import ViewPost from "./pages/ViewPost.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/posts",
		element: <Posts />,
	},
	{
		path: "/add-post",
		element: <AddPost />,
	},
	{
		path: "/posts/post/:id",
		element: <ViewPost />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
		<Toaster />
	</StrictMode>
);
