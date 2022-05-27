import { MdDeleteForever } from 'react-icons/md'

const Note = () => {
  return (
    <div className="note">
      <span>
        {' '}
        This is out first note. 
      </span>
      <div className="note-footer">
        <small>13/04/2003</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  )
}

export default Note
