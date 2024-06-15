import { useState } from 'react'
import './App.css'
import Head from './components/Head'
import Userprofile from './components/UserProfile'
import Repos from './components/Repos'
import Followers from './components/Followers'
import Following from './components/Following'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
     
     <Head/>
     <div className="body-container">
      <div className="profile-info">
        <Userprofile/> 
      </div>
      <div>
        <Repos/>
        <Followers/>
        <Following/>
      </div>
     </div>
     

    </div>
    
  )
}

export default App
