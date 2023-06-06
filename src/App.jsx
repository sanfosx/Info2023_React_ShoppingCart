//import { useState } from 'react'
import './App.css'
import FormComponent from './components/FormComponent'
import ListComponent from './components/ListComponent'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="app-container borderes">
      <aside className="borderes">
       <FormComponent/>
      </aside>
      <main className="borderes">
       <ListComponent/>
      </main>
    </div>
  )
}

export default App
