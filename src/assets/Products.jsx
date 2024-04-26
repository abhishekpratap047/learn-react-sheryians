import React, { useState } from 'react'

function Products({name,age,address,data}) {
    
const [a,b] = useState(true);
  return (
    
    <div className='text-white'>
        <div className='text-white w-full h-60 bg-zinc-600'>
            <ul>
                <li>name:{name}</li>
                <li>age:{age}</li>
                <li>address:{address}</li>
                <li>data:{data.what}</li>
            </ul>
        </div>
        <h3 className={`${a===false ? "text-red-600": "text-blue-600"}`}>
            {a === false ? "hello" : "hi"}</h3>
        <button onClick={()=>{b(!a)}}>Change</button>
    </div>
  )
}

export default Products