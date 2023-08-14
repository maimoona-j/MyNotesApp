import React, { useState } from "react";
import Add from "../Components/Add";
import FullContent from "../Components/FullContent";
import Notes from "../Components/Notes";

export default function NoteApp() {
  const [notes, setNotes] = useState([]);
  const [fullContentIndex, setFullContentIndex] = useState(null);

  const handleAddNote = (content) => {
    setNotes([...notes, content]);
  };

  const handleShowFullContent = (index) => {
    setFullContentIndex(index);
  };

  return (
    <div>
      <Add onAddNote={handleAddNote} />
      <Notes
        notes={notes}
        setNotes={setNotes}
        showContent={handleShowFullContent}
      />
      {fullContentIndex !== null && (
        <FullContent
          content={notes[fullContentIndex].content}
          setShowContent={() => setFullContentIndex(null)}
        />
      )}
    </div>
  );
}
