import classes from "./notes_list_page.module.css";
import { Link } from "react-router-dom";
import NotesList from "../../components/NotesList";
import { useContext, useEffect } from "react";
import { NotesContext } from "../../context/NotesContext";

const NotesListPage = () => {
  const { isLoading, notesData, getNotes } = useContext(NotesContext);
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <section className={`py-3 j-bg-dark-light ${classes.notes_list_container}`}>
      {isLoading ? (
        <div className="position-absolute d-flex justify-content-center align-items-center h-75 w-100">
          <div className="spinner-border j-text-secondary" role="status"></div>
        </div>
      ) : null}
      <div className="d-flex justify-content-between align-items-center mx-3">
        <div className="j-text-secondary h3">&#9782; Notes</div>
        <span className="text-muted lead">{notesData?.length}</span>
      </div>
      <NotesList />
      <Link
        to="/note/new"
        className={`${classes.floating_icon} fs-2 text-dark`}
      >
        <h2>+</h2>
      </Link>
    </section>
  );
};

export default NotesListPage;
