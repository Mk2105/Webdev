import React from 'react';

function NoteList({ notes, deleteNote }) {
  return (
    <div className="row my-5 align-items-center justify-content-center g-0">
        {notes.map((note, index) => (
            <div className="col-8 col-lg-4 col-xl-3 " key={index}>
            <div className="card border-primary shadow m-2 p-0">
            <div className="card-header bg-primary-subtle fw-bold text-start">{note.title}</div>
            <div className="card-body">
                <p className="card-text text-start ms-2">{note.content}</p>
            <div className="text-end">
            <button className="btn btn-sm btn-outline-danger p-1 text-muted" onClick={() => deleteNote(index)}>Delete</button>
            </div>
            </div>
            </div>
           </div> ))}
        </div>
    
  
  )
}
export default NoteList;
