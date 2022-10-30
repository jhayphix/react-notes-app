import { useContext } from "react";
import { Link } from "react-router-dom";
import { NotesContext } from "../context/NotesContext";

const NotesList = () => {
  const { notesData } = useContext(NotesContext);
  const getTitle = (title) => {
    const len = 35;
    let truncatedTitle = title.split("\n")[0];
    if (truncatedTitle.length > len) {
      truncatedTitle = `${truncatedTitle.slice(0, len)} ...`;
    }
    return truncatedTitle;
  };
  const getSubText = (text) => {
    let modifiedText = text?.split("\n").slice(1, 3);

    // if (modifiedText?.length > 4) {
    //   modifiedText = modifiedText.map((text) => {
    //     return ` ${text.slice(0, 10)}`;
    //   });
    // }

    return modifiedText;
  };

  return (
    <div className="row m-0">
      {notesData.map((note, index) => {
        return (
          <Link
            to={`/note/${note.id}`}
            className="note-list-item col-12 py-2"
            key={index}
          >
            <div className="my-2">{note.body ? getTitle(note.body) : null}</div>
            <div className="text-muted">
              {new Date(note?.updated).toLocaleDateString()} {" - "}
              {getSubText(note?.body)}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NotesList;
