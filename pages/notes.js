import React, { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [notes, setNotes] = useState([])
  const [noteTitle, setNoteTitle] = useState('')
  const [noteBody, setNoteBody] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newNote = {
      id: (notes.length + 1).toString(),
      title: noteTitle,
      body: noteBody,
    }

    setNotes([...notes, newNote])
    setNoteTitle('')
    setNoteBody('')
  }

  return (
    <>
      <h2>Add New Note</h2>
      <form>
        <input
          type='text'
          placeholder='Note Title'
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <input
          type='text'
          placeholder='Note Body'
          value={noteBody}
          onChange={(e) => setNoteBody(e.target.value)}
        />
        <button onClick={handleSubmit}>Add Note</button>
      </form>

      <h2>Notes</h2>

      {notes.map((note) => (
        <div key={note.id}>
          <Link
            href={{
              pathname: `/notes/${note.id}`,
              // * Pass data to another page via useRouter and query
              query: note,
            }}
          >
            {note.title}
          </Link>
          <p>{note.body.slice(0, 20)}...</p>
        </div>
      ))}
    </>
  )
}
