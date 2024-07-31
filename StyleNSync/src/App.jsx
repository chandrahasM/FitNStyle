import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './Dashboard/UserProfile'
import DetailDashboard from './Dashboard/DetailDashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UserProfile /> */}
      <DetailDashboard/>        
    </>
  )
}

export default App
