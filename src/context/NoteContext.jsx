import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const NoteContext = createContext();

const NoteContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [noteData, setNoteData] = useState(null);

  // ____________ Get Data
  // const getDataHandler = async (URL) => {
  //   const response = await fetch(URL);
  //   const data = await response.json();
  //   setNoteData(data);
  // };

  // ____________ Create Data
  const createDataHandler = async (NOTE_URL) => {
    await fetch(NOTE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...noteData, updated: new Date() }),
    });

    navigate("/");
  };

  // ____________ Update Note
  const updateDataHandler = async (NOTE_URL) => {
    await fetch(NOTE_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...noteData, updated: new Date() }),
    });
    navigate("/");
  };

  // ___________ Delete Note
  const deleteDataHandler = async (NOTE_URL) => {
    await fetch(NOTE_URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(noteData),
    });
    navigate("/");
  };

  const context = {
    noteData: noteData,
    setNoteData: setNoteData,
    updateDataHandler: updateDataHandler,
    deleteDataHandler: deleteDataHandler,
    createDataHandler: createDataHandler,
  };

  return (
    <NoteContext.Provider value={context}>{children}</NoteContext.Provider>
  );
};

export default NoteContextProvider;
