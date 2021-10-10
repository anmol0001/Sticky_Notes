import React, { useState } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Tooltip from '@material-ui/core/Tooltip';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const Note = (props)=>{
 
    const [the,setTheme]=useState(false);

const theme= () =>{
    setTheme(!the);
};    

const st={
  color:the?"#f4b400":"",
  background:the?"black":null
};

const deleteNote=() =>{

props.deleteItem(props.id);

};

    return(
        <>
        <div className="note" style={st}>
            <h1>{props.title}</h1>
            <br/>
            <p >{props.content}</p>
            <Tooltip title="Delete Note">
            <button className="btn" onClick={deleteNote}>
            <DeleteOutlineIcon className="deleteIcon"/>
            </button>
            </Tooltip>
            <Tooltip title="Dark & Bright">
            <button className="btn" onClick={theme}>
            <Brightness4Icon className="deleteIcon"/>
            </button>
            </Tooltip>
        </div>
        </>
    );
}

export default Note;