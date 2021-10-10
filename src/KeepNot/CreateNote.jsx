import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';


const CreateNote = (props) => {

    const [expand,setExpand]=useState(false);

  const [note,setNote]=useState({
       title:"",
       content:"",
  });

  const expandIt=()=>{
      setExpand(true);
  };

  const prevState=()=>{
      setExpand(false);
  };

  const InputEvent = (event) =>{
         const {name,value}=event.target;
         
         setNote((prevData)=>{
            return{
               ...prevData,
               [name]:value, 
              }; 
         });
         };
    const addEvent = () =>{ 
        if(note.title === "" && note.content === "")
        alert("Note Is Empty!!📪");
         
        else{
         props.passNote(note);
         setNote({
            title:"",
            content:"",
         });
    };
    }
    return(
<>
<div className="main_note" onDoubleClick={prevState}>
    <form>
       { expand?
        <input type="text" 
        placeholder="Title"  
        onChange={InputEvent} 
        value={note.title} 
        name="title" 
        autoComplete="off"/>: null}

        <textarea rows="" 
        column="" 
        placeholder="Write a note..." 
        onChange={InputEvent} 
        value={note.content} 
        name="content" 
        onClick={expandIt} 
        />
        
        {expand?
        <Tooltip title="Add Note">
        <Button onClick={addEvent}>
                 <AddIcon className="plus_sign"/>
        </Button>
        </Tooltip>: null}
    </form>
</div>

</>

    );
}

export default CreateNote;