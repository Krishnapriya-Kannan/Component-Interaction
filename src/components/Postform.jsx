import React, { useState } from 'react';
import Display from './Display';

function FormView(){
    const initialFormData = Object.freeze({
        name:"",
        comments:""});
        const [input,setinput]= useState([])
        const [formData, updateFormData]= React.useState(initialFormData);
    const handleChange=(e)=> {
    updateFormData({...formData,[e.target.name]:e.target.value.trim()})
      }

    const handleSubmit =(e) =>{
        e.preventDefault()
        let name= formData.name;
        let comments= formData.comments;
        setinput([...input,{name,comments}])
        console.log(input);
        console.log(formData);
       
      }
    return(
      <div className='cont'>
        <div className='box1'>
    <div className='boxin1'>
    <p style={{fontWeight:'bold'}}>Share Your Experience</p>
    <lable>Name:</lable><br/>
    <input name ="name" style={{width:300}}  onChange={handleChange} /><br/>
    <lable>Comments:</lable><br/>
    <textarea  name ="comments" style={{width:300,borderRadius:5}} onChange={handleChange} /><br/>
    <button style={{width:150}} onClick={handleSubmit} onChange={initialFormData}>Post</button>
    </div>
    </div>
    <div className='box2'>
    <table>
      <tbody>
  <Display input={input}/>
      
      </tbody>
    </table>
    </div>
    </div>
    )
}
export default FormView;