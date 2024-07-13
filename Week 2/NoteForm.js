import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addNote({ title, content });
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group ms-5 me-5">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          id="noteTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group ms-5 me-5">
        <label>Content</label>
        <textarea
          className="form-control"
          id="noteContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Note</button>
    </form>
  );
}

export default NoteForm;
