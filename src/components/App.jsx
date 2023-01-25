import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "./notes";
import { useState } from "react";

function App() {
	const [notes, setNotes] = useState([]);

	function addNote(newNote) {
		setNotes((prevNotes) => {
			return [...prevNotes, newNote];
		});
	}

	function deleteNote() {}

	return (
		<div>
			<Heading />
			<CreateArea onAdd={addNote} />
			{notes.map((noteItem) => {
				return <Note title={noteItem.title} content={noteItem.content} />;
			})}
			<Footer />
		</div>
	);
}

export default App;
