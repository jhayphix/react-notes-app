import { useContext, useEffect } from "react";
import { Link, useMatch } from "react-router-dom";
import { NoteContext } from "../../context/NoteContext";
import { NotesContext } from "../../context/NotesContext";
import styles from "./note_page.module.css";

const NotePage = () => {
  const {
    noteData,
    setNoteData,
    createDataHandler,
    updateDataHandler,
    deleteDataHandler,
  } = useContext(NoteContext);
  const { getNotes } = useContext(NotesContext);

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const { params } = useMatch("/note/:id");
  const noteId = params.id;
  const NOTE_URL = `http://localhost:8000/notes/${noteId}`;
  const NOTES_URL = "http://localhost:8000/notes";

  useEffect(() => {
    const getDataHandler = async () => {
      if (noteId === "new") return;
      const response = await fetch(`http://localhost:8000/notes/${noteId}`);
      const data = await response.json();
      setNoteData(data);
    };
    getDataHandler();
  }, [noteId, setNoteData]);

  const submitHandler = () => {
    if (noteId !== "new" && !noteData.body) {
      deleteDataHandler(NOTE_URL);
    } else if (noteId !== "new") {
      updateDataHandler(NOTE_URL);
    } else if (noteId === "new" && noteData?.body !== null) {
      createDataHandler(NOTES_URL);
    }
  };
  const deleteHandler = () => {
    deleteDataHandler(NOTE_URL);
  };

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center p-3">
        <Link
          onClick={() => {
            submitHandler();
          }}
          className="j-text-secondary fs-4 fw-light "
        >
          &lt; Notes
        </Link>

        {noteId === "new" ? (
          <div
            onClick={() => submitHandler()}
            className="j-text-secondary fs-5"
            style={{ cursor: "pointer" }}
          >
            Done
          </div>
        ) : (
          <Link
            onClick={() => deleteHandler()}
            className="j-text-secondary fs-5"
          >
            Delete
          </Link>
        )}
      </div>

      <textarea
        onChange={(e) => {
          setNoteData({ ...noteData, body: e.target.value });
        }}
        value={noteData?.body}
        className={` ${styles.notes_text_area} py-2 px-3`}
      ></textarea>
    </section>
  );
};

export default NotePage;
