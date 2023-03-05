import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const Todo = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            item: 'This is a boy',
            checked: false
        },
        {
            id: 2,
            item: 'This is a girl',
            checked: false
        },
        {
            id: 3,
            item: 'This is a cat',
            checked: false
        },
    ])

    const [search, SetSearch] = useState("")

    const SearchEl = (e)=>{
        SetSearch(e.target.value)
        const listItems = items.filter((item) => (item.item).toLowerCase().includes(search.toLowerCase()))
        setItems(listItems)
    }

    const onChange = (id) => {
        const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
        setItems (listItems)
    }

    const [newItem, setNewItem] = useState()

    const addItem = (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const mynewItem = {id, item, checked:false}
        const listItems = [ ...items, mynewItem]
        setItems(listItems)

    }
    const submitItem = () => {
        if(!newItem) return;
        addItem(newItem)
        setNewItem('')
    }
    const deleteEl = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
    }
  return (
    <div className=' w-[90%] md:w-[50%] justify-center items-center text-white text-center mt-6 m-auto'>
        <h1 className='text-center text-2xl font-medium'>This is my own todo app</h1>
        <p>There are 3 Todo items</p>
        <div className=" mt-3">
            <input type="search" placeholder='Search Items...' 
            className=' w-full py-1 rounded-xl focus:outline-none px-5 tracking-wider text-gray-600 placeholder:text-gray-600 placeholder:tracking-wider'
            value={search}
            onChange={SearchEl}
            />
        </div>
        <div className="flex items-center gap-1 mt-3">
            <input type="search" placeholder='Add Items' 
            className=' w-full py-1 rounded-xl focus:outline-none px-5 tracking-wider text-gray-600 placeholder:text-gray-600 placeholder:tracking-wider'
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            />
            <button className=' bg-blue-700 py-2 px-3 rounded active:bg-blue-800'
            type='submit'
            onClick={submitItem}
            >
                <FaPlus />
            </button>
        </div>
        <ul className="flex flex-col gap-2 mt-8">
            {
                items.map((item)=>(
                    <li className=' bg-white text-black font-semibold text-xl py-2 px-3 flex justify-between' key={item.id}>
                       <div className="flex gap-3">
                            <input type="checkbox"
                                className=' w-[30px] h-[30px]'
                                checked={item.checked}
                                onChange={() => onChange(item.id)}
                            />
                            <p className=' bg-blue-200 w-[430px] py-1'>
                                {item.item}
                            </p>
                       </div>
                        <button className=' bg-blue-600 rounded-full w-[30px] h-[30px] flex items-center justify-center active:bg-blue-800'
                        onClick={() => deleteEl(item.id)}
                        >
                            <FaMinus />
                        </button>
                    </li>
                ))
            }
        </ul>
      
    </div>
  )
}

export default Todo
