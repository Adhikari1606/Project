import { useState } from 'react'
import Admin from '../pages/admin'
import Cyhome from '../pages/collagehome'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path='\' component={<Admin/>}/>
        <Route path='\admin' component={<Cyhome/>}/>
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
