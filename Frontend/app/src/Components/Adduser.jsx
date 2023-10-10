import React, { useState,useEffect} from 'react'
import '../Style/Adduser.css'
import { Link } from 'react-router-dom'
import { adduser,alluser } from '../API/Api'

const Adduser = () => {
 const [name,setname]=useState('')
 const [number,setnumber]=useState('')
 const [email,setemail]=useState('')
 const [adress,setadress]=useState('')
 const [users,setusers]=useState([])
 const [useradded,setuseradded]=useState(false)
 const [userupdate,setuserupdate]=useState(false)
 

 useEffect(()=>{
   alluser(setusers)
 },[])


  return (
    useradded?(<div><h1>"User added Successful"</h1>
    <button className='addnewuser' onClick={()=>{setuseradded(false)}} >Add new user</button>
    <Link to={'/users'}>
    <button className='checklist'>Userlist</button></Link>
    </div>
    ):(
    <div className='adduser-list '>
    <h1>{userupdate?"Update User":"Add User"}</h1>
    <div className="add-user-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e)=>{setname(e.target.value)}}
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>{setemail(e.target.value)}}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
         value={number}
         onChange={(e)=>{setnumber(e.target.value)}}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={adress}
          onChange={(e)=>{setadress(e.target.value)}}
        />
        <button className='adduserbutton' onClick={()=>adduser(name,setname,email,setemail,number,setnumber,adress,setadress,setusers,setuseradded)}>Add User</button>
      </div>
      </div>)
  )
}
export default Adduser

