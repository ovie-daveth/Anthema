import React, { useState } from 'react'


const AddItem = ({ items, setItems }) => {

    const [New, SetNew] = useState()

    const addItem = (item) => {
        const id = items.length ? items[items.length - 1] + 1 : 1;
        const myNewItem =  {id, checked: false, item};
        const listItems = [...items,myNewItem];
        setItems(listItems)
        localStorage.setItem('key', JSON.stringify(listItems))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!New) return;
        addItem(New)
        SetNew('')
    }

  return (
    <form 
    onSubmit={handleSubmit}
    className=' flex justify-center mx-auto my-5'>
      <button type="submit" className='border border-gray-300 bg-white text-black font-semibold p-2 order-2 rounded-r-xl' htmlFor="text">Add Item</button>
      <input type="text" id="text" placeholder='Add Items...' className=' px-2 rounded-l-xl focus:outline-gray-300 tracking-widest text-gray-600 ' 
      value={New}
      onChange={(e) => SetNew(e.target.value)}
      />
    </form>
  )
}

export default AddItem
