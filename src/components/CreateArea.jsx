import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setnewNote] = useState({
    title: "",
    content: ""
  });

  function handleChangeTitle(event) {
    setnewNote((prev) => {
      return {
        ...prev,
        title: event.target.value
      }
    })
    console.log(newNote);
  }
  function handleChangeContent(event) {
    setnewNote((prev) => {
      return {
        ...prev,
        content: event.target.value
      }
    })
    console.log(newNote);
  }

  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        props.call(newNote);
        setnewNote({
          title: "",
          content: ""
        });
      }}>
        <input name="title" value={newNote.title} onChange={handleChangeTitle} placeholder="Title" />
        <textarea name="content" value={newNote.content} onChange={handleChangeContent} placeholder="Take a note..." rows="3" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
