import React, { useState } from 'react'
import colorNames from 'colornames'

const Meet = () => {

    const [color, setColor] = useState("")
    const [hexValue, setHexValue] = useState('')
    const [isDark, setIsDart] = useState(true)
    const bg = {
        color: `${isDark ? 'white' : 'black'}`,
        backgroundColor: `${color}`
    }

    const onChange = (e) =>{
        setColor(e.target.value);
        setHexValue(colorNames(e.target.value));
    }
 




  return <main>
    <div className=' mt-5 m-auto h-[400px] w-[300px] flex flex-col justify-center items-center'>
        <div className={`border border-gray-300 w-full h-full text-white flex items-center justify-center flex-col gap-3 font-bold`}
        style={bg}
        >
            {color ? color : 'Empty Color'} 
            <p>
                {hexValue ? hexValue: null}
            </p>
        </div>
      <input type="text" 
      className={`mt-2 w-full bg-transparent text-white font-semibold border-b-2 border-gray-300 px-2 focus:outline-none -tracking-wider`}
      placeholder='Change color'
      value={color}
      onChange={onChange}
      />
       <button
    className=' text-white font-bold w-full flex justify-center items-center mt-2 bg-blue-700 py-2 rounded-sm active:bg-blue-800'
    onClick={() => setIsDart(!isDark)}
    >Toggle text color</button>
    </div>
   
    </main>
  
}

export default Meet
