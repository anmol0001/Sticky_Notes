import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import './keep.css';


const Keep= () => {
       const [addItem,setAddItem]=useState([]);

   const addNote= (note)=>{
     
     setAddItem((prevData)=>{
          return[...prevData,note];
     });
};

const onDelete = (id) => {
   setAddItem((oldData) => {
         return oldData.filter((currval,index)=>{             
         return id !== index ;
      });
});
};

    return(
           <React.Fragment>
                <Header/>
                   <CreateNote passNote={addNote}/>
                     {addItem.map((val,index)=>{
                         return  <Note 
                            key={index}
                            id={index}
                            title={val.title}
                            content={val.content}
                             deleteItem={onDelete} />
                         })}

                <Footer/>

               </React.Fragment>
               
               );


}

export default Keep;