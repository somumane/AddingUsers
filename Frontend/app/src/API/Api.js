import axios from "axios";

const alluser=(setusers)=>{
    axios.get('/api/users').then((data)=>{
        setusers(data.data)
      }).catch(err=>console.log(err))
}

const adduser=(name,setname,email,setemail,number,setnumber,adress,setadress,setusers,setuseradded)=>{
    axios.post('/api/useradd',{name,number,email,adress}).then((data)=>{
        console.log(data)
        setname("")
        setemail("")
        setnumber("")
        setadress("")
        setuseradded(true)
        alluser(setusers)
    }).catch(err=>console.log(err))
}
const updated=(name,setname,email,setemail,number,setnumber,adress,setadress,setusers,userid,setuserupdated)=>{
    axios.post('/api/userupdate',{_id:userid,name,number,email,adress}).then((data)=>{
        console.log(data)
        setname("")
        setemail("")
        setnumber("")
        setadress("")
        setuserupdated(true)
        alluser(setusers)
    }).catch(err=>console.log(err))
}

const Delete=(id,setusers)=>{
    axios.post('/api/userdelete',{_id:id})
    .then((data)=>{
     alluser(setusers) 
    }).catch(err=>console.log(err))
}


export {alluser,adduser,updated,Delete}