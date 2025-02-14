import React from 'react'
//status is like children

const Navbar = ({status}) => {
  return (
    <div>
        <div className='bg-white w-[30vw] h-7 rounded-full ' >
              <h1 className='text-center font-medium text-emerald-500 ' > {status} </h1>
        </div>
    </div>
  )
}

export default Navbar