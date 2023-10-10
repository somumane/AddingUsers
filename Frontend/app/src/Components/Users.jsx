import React,{useState,useEffect} from 'react'
import '../Style/User.css'
import { alluser,updated,Delete} from '../API/Api'
import { Link } from 'react-router-dom'



const Users = () => {
  const [users,setusers]=useState([])
  const [update,setupdate]=useState(false)
  const [name,setname]=useState('')
  const [number,setnumber]=useState('')
  const [email,setemail]=useState('')
  const [adress,setadress]=useState('')
  const [userid,setid]=useState()
  const [userupdated,setuserupdated]=useState(false)
  useEffect(()=>{
  alluser(setusers)
},[])

const updateuser=(id,users,setupdate)=>{
     const user=users.find(user=> user._id===id)   
     setupdate(true)
     setid(id)
     setname(user.name)
     setnumber(user.number)
     setemail(user.email)
     setadress(user.adress)
    }

const deleteuser=(id,users)=>{
  const user=users.find(user=> user._id===id) 
  Delete(user._id,setusers)
}

  return (
    update?(userupdated?(<div><h1>"User Updated Successful"</h1>
    <Link to={'/adduser'}>
    <button className='addnewuser'>Add new user</button></Link>
    
    <Link to={'/users'}>
    <button className='checklist' onClick={()=>setupdate(false)} >Userlist</button></Link>
    </div>
    ):(
    <div className='adduser-list '>
    <h1>Update User</h1>
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
        <button className='adduserbutton' onClick={()=>updated(name,setname,email,setemail,number,setnumber,adress,setadress,setusers,userid,setuserupdated)}>Update User</button>
      </div>
      </div>)):(
    <div>
    <h1>User List</h1><Link to={'/adduser'}><button className='adding'>Add User</button></Link>
   {
    users.map((data)=>
    <div className="user">
      <h2>{data.name}</h2>
      <p>Email:{data.email}</p>
      <p>Phone:{data.number}</p>
      <p>Address:{data.adress}</p>{
      }
      <button className='update' onClick={()=>updateuser(data._id,users,setupdate,setid,setname,setnumber)}>Update</button>  <button className='delete' onClick={()=>deleteuser(data._id,users)}>Delete</button> 
    </div>
    )
   }
    </div>)
  )
}

export default Users
