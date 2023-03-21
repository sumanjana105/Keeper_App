import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArray, setnoteArray] = useState([]);
  
  function handleClick(newNote){
    setnoteArray((prev) => {
      return [
        ...prev,
        newNote
      ]
    });
    console.log(noteArray);
  }
function deleteNote(id){
  setnoteArray((prev) => {
    return ( prev.filter((element,index) =>{
        return index!==id;
    }
    )

    )
  })
}

  return (
    <div>
      <Header />
      <CreateArea call={handleClick}/>
      {noteArray.map((item, index) => {
        return <Note key={index} id={index} title={item.title} content={item.content} call={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
