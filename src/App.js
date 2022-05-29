import { useEffect, useState } from 'react'
import NotesList from './components/NotesList'
import { nanoid } from 'nanoid'
import Search from './components/search'
import Header from './components/Header'

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

  const [serachText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))

    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  // useEffect(() => {
  //   const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))

  //   //If savedNotes is empty or does not have a value then it will skip over this.
  //   if (savedNotes) {
  //     setNotes(savedNotes)
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  // }, [notes])

  // This will take the text passed into the addNote section.
  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }

    //This array has all the existing notes and will add new note to the array.
    //This line create a new array instead of updating the old array.
    const newNotes = [...notes, newNote]

    //This will update the state. It causes the component to re-render and the list updates
    // with the new data.
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    //This statement tells that if dark mode is true then set to dark mode.
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(serachText),
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  )
}

export default App
