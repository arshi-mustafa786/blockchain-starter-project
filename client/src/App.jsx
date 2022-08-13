import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Welcome, Navbar, Transactions, Services, Footer } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="">
      <Welcome/>
      <Navbar/>
      </div>
      <Transactions/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App
