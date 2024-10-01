const CustomButton = ({ btnTitle, btnStyles, btnAction, btnType }) => {
	return (
		<button type={btnType} className={btnStyles} onClick={btnAction}>
			{btnTitle}
		</button>
	);
};

export default CustomButton;
