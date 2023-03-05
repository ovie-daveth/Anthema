import React from 'react'
import { AiTwotoneDelete } from 'react-icons/ai'

const ItemList = ({items, onChange, onDelete}) => {
  return (
    items.map((item) => (
        <li key={item.id} className="flex justify-between items-center border border-gray-300 py-2 px-2 bg-white text-black rounded hover:bg-gray-100">
           <div className="flex gap-3 items-center ">
                <input className='w-[40px] h-[40px]' type="checkbox" checked={item.checked}
                onChange={() => onChange(item.id)}
                />
                <p className=' text-lg font-semibold'>{item.item}</p>
           </div>
            <span className='text-2xl text-red-600 active:text-red-800'
            onClick={() => onDelete(item.id)}
            >
                <AiTwotoneDelete 
                type='button'
                
                />
            </span>
     </li>
    ))
  )
}

export default ItemList
