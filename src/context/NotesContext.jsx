import { createContext, useState } from "react";
export const NotesContext = createContext();

const NotesContextProvider = ({ children }) => {
  const [notesData, setNotesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNotes = async () => {
    const notesFromServer = await fetchData();
    setIsLoading(false);
    setNotesData(notesFromServer.reverse());
  };

  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/notes");
    const data = await response.json();
    return data;
  };

  const context = {
    notesData: notesData,
    setNotesData: setNotesData,
    getNotes: getNotes,
    isLoading: isLoading,
  };

  return (
    <NotesContext.Provider value={context}>{children}</NotesContext.Provider>
  );
};

export default NotesContextProvider;
