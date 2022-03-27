import React from 'react'
import Navbar from './components/navbar/Navbar';

const App = () => {
  const user ={
    name:'John Doe',
    email:'johndoe@gmail.com',
    image:'/images/user.jpg'
  }
  return (
    <div className='app'>
      <Navbar user={user}/>
    </div>
  )
}

export default App;