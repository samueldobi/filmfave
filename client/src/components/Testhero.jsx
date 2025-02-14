import React from 'react'

const Testhero = () => {
  return (
    <>

<div
      href="#"
      className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition w-80" // Added w-80 for standard card width
    >
      <img
        className="w-full h-60 object-cover rounded-t-xl" // Added h-48 for a fixed image height
        src="/images/arrow-next.png"
        alt="Card Image"
      />
      <div className="p-4 md:p-5 overflow-y-auto max-h-32 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <h3 className="text-lg font-bold text-gray-800">Card title</h3>
        <p className="mt-1 text-gray-500">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
      </div>
   </div>
   
    </>
  )
}

export default Testhero