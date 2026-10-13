import { useState } from 'react'
import './App.css'
import StudentCard from './components/StudentCard.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
<div className="container">
    <StudentCard />
</div>


  );
}

export default App;
