import React from "react";

function Heading() {
	const date = new Date();
	const timeOfDay = date.getHours();

	let customStyle = {
		color: "",
	};
	let greeting;

	if (timeOfDay < 12) {
		greeting = "Good Morning";
		customStyle.color = "red";
	} else if (timeOfDay < 18) {
		greeting = "Good Afternoon";
		customStyle.color = "green";
	} else {
		greeting = "Good Evening";
		customStyle.color = "blue";
	}

	return (
		<h1 className="heading" style={customStyle}>
			{greeting}
		</h1>
	);
}

export default Heading;
