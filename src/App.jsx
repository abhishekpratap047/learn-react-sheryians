import React, { useState } from 'react'
import Products from './assets/Products';

function App() {
  var [a,b] = useState(10);
  return (
    <div className='w-full h-screen bg-zinc-900 text-white p-5'>
      <h1>{a}</h1>
      <button onClick={()=>{b(a+1)}} className='px-3 py-1 bg-green-500 rounded-md text-small'>click</button>
      <Products name="Doraemon" age="10 years" address="Japan" data={{hello:25, what:"okay"}}/>
    </div>
  )
}

export default App