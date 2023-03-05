import React from 'react'

const SearchItem = ({Search, SetSearch } ) => {

   
  return (
    <form 
    onSubmit={(e) => e.preventDefault()}
    className=' flex justify-center mx-auto my-5'>
      <input type="text" id="search" placeholder='Search Task...' className=' px-2 py-2 rounded-xl focus:outline-gray-300 tracking-widest text-gray-600 w-[88%] md:w-[94%]' 
      role='searchbox'
      value={Search}
      onChange={(e) => SetSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchItem
