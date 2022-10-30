import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import NotesListPage from "./pages/notes_list_page/NotesListPage";
import NotePage from "./pages/note_page/NotePage";

const Layouts = () => {
  return (
    <div
      id="main-container"
      className="row justify-content-center py-xl-5 py-lg-4 py-md-3 py-2"
    >
      <div className="main-container-wrapper col-xl-4 col-md-6 col-sm-8 col-11 shadow p-0">
        <Header />
        <Routes>
          <Route index exact element={<NotesListPage />} />
          <Route path="/note/:id" element={<NotePage />} />
          <Route path="*" element="Notes Not Found" />
        </Routes>
      </div>
    </div>
  );
};
export default Layouts;
