import React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	const [isExpanded, setIsExpanded] = useState(false);

	function handleChange(event) {
		const { value, name } = event.target;

		setNote((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	}

	function expand() {
		setIsExpanded(true);
	}

	function submitNote(event) {
		props.onAdd(note);
		setNote({
			title: "",
			content: "",
		});
		event.preventDefault();
	}

	return (
		<div>
			<form className="create-note">
				{isExpanded && (
					<input
						onChange={handleChange}
						name="title"
						placeholder="Title"
						value={note.title}
					/>
				)}

				<textarea
					onClick={expand}
					onChange={handleChange}
					name="content"
					placeholder="Take a note..."
					rows={!isExpanded ? 1 : 3}
					value={note.content}
				/>
				<Zoom in={isExpanded ? true : false}>
					<Fab onClick={submitNote}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
