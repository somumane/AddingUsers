import React from 'react'
import '../Style/home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
    <Link to={'/users'}>
     <button className='users'>All Users</button>
     </Link>
     <Link to={'/adduser'}>
     <button className='add'>AddUser</button></Link>
    </div>
  )
}

export default Home
