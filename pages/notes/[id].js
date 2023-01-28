import { useRouter } from 'next/router'

export default function NoteDetail() {
  // * Get the note data from the router (see notes.map() in index.js)
  const router = useRouter()
  const note = router.query

  return (
    <>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={() => router.back()}>Go Back</button>
    </>
  )
}
