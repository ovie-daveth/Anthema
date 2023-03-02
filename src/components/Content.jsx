import React, { useState } from 'react'
import { AiTwotoneDelete } from 'react-icons/ai'
import AddItem from './AddItem'

const Content = () => {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('key')))

    const onChange = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        setItems (listItems)
        localStorage.setItem('key', JSON.stringify(listItems))
    }
    const onDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
        setItems (listItems)
        localStorage.setItem('key', JSON.stringify(listItems))
        
    }

   
  return (
    <main className=' text-white flex flex-col w-full md:w-[50%] m-auto  h-screen'>
      <h1 className='mt-6 text-2xl text-white font-bold text-center'>My List Items</h1>
      <p className=' text-center font-medium mt-2'>There are {items.length} List {items.length === 1 ? 'Item' : 'Items'} </p>
      <AddItem 
      setItems={setItems}
      items={items}
      />
      <ul className="flex flex-col gap-3 px-6">
        {
           items.length ? (
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
           ) :
           <h3 className='text-center text-xl font-semibold'>There is no Items Created</h3>
        }
      </ul>
    </main>
  )
}

export default Content
