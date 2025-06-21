import Note from "./Note";

const NodeList = ({ notes, onDelete }) => {

    return (
        <div className="note-list">
            {notes.map(note => (
                <Note key={note.id} {...note} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default NodeList;