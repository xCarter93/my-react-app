import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
	const [notes, setNotes] = useState([]);

	function addNote(newNote) {
		setNotes((prevNotes) => {
			return [...prevNotes, newNote];
		});
	}

	function deleteNote(id) {
		setNotes((preNotes) => {
			return preNotes.filter((item, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div>
			<Heading />
			<CreateArea onAdd={addNote} />
			{notes.map((noteItem, noteIndex) => {
				return (
					<Note
						key={noteIndex}
						id={noteIndex}
						title={noteItem.title}
						content={noteItem.content}
						onClicked={deleteNote}
					/>
				);
			})}
			<Footer />
		</div>
	);
}

export default App;
