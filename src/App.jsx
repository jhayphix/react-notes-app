import { BrowserRouter } from "react-router-dom";
import Layouts from "./Layouts";
import "./app.css";
import NotesContextProvider from "./context/NotesContext";
import NoteContextProvider from "./context/NoteContext";

const App = () => {
  return (
    <BrowserRouter>
      <NotesContextProvider>
        <NoteContextProvider>
          <Layouts />
        </NoteContextProvider>
      </NotesContextProvider>
    </BrowserRouter>
  );
};

export default App;
