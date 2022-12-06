import {MdDeleteForever} from 'react-icons/md'

const Note = ({id,text,date,handleAddNote}) =>{
  return(
    <div className="note">
      <span>{text} </span>
      <div className="note-Footer">
        <small>{date}</small>

        <MdDeleteForever onClick={()=>handleAddNote(id)}  className='delete-icon' size='1.3em'/>
      </div>
     
    </div>
  )
}

export default Note;