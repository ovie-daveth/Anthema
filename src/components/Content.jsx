import React, { useState } from 'react'
import AddItem from './AddItem'
import ItemList from './ItemList'
import SearchItem from './SearchItem'

const Content = () => {

  const [Search, SetSearch] = useState("")
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
      <div className=" ">
        <AddItem 
        setItems={setItems}
        items={items}
        />
        <SearchItem 
          Search={Search}
          SetSearch={SetSearch}
        />
      </div>
      <ul className="flex flex-col gap-3 px-6">
        {
           items.length ? (
           <ItemList
           items={items.filter(item => ((item.item).toLowerCase().includes(Search.toLowerCase())))}
           onChange={onChange}
           onDelete={onDelete}
           />
           ) :
           <h3 className='text-center text-xl font-semibold'>There is no Items Created</h3>
        }
      </ul>
    </main>
  )
}

export default Content
