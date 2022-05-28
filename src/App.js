import { useState } from 'react'
import NotesList from './components/NotesList'
import { nanoid } from 'nanoid'


const App = () => {
  const [notes, setNotes] = useState([ 
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: '15/04/2003',
    },
    {
      id: nanoid(),
      text: 'This is my second note!',
      date: '22/04/2003',
    },
    {
      id: nanoid(),
      text: 'This is my third note!',
      date: '28/04/2003',
    },
    {
      id: nanoid(),
      text: 'This is my new note!',
      date: '31/04/2003',
    },
  ])
  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  )
}

export default App
