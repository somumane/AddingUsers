const Router =require('express')
const router=Router()
const {users, adduser, updateuser, deleteuser} =require('../Controllers/Controler')

router.get('/api/users',users)
router.post('/api/useradd',adduser)
router.post('/api/userupdate',updateuser)
router.post('/api/userdelete',deleteuser)
module.exports=router