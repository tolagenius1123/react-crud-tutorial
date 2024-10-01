const PostCard = ({ id, title, description, author }) => {
	return (
		<div
			key={id}
			className="mx-auto w-auto h-auto py-4 px-6 flex flex-col gap-2 rounded-lg shadow-md cursor-pointer hover:shadow-lg"
		>
			<h1 className="text-lg font-bold">{title}</h1>
			<p className="text-sm">{description}</p>
			<div className="flex justify-end">
				<p className="text-sm font-semibold">Author - {author}</p>
			</div>
		</div>
	);
};

export default PostCard;
