import React from 'react'
import Logo from '../logoComponents/Logo';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-primary h-[70px]'>

      <div className='relative flex justify-center items-center ml-[10px]'> 
      <Logo/>  
      <div className='absolute font-bold text-clearIceFullLight text-[20px] sm:ml-[30px] lg:ml-[70px]' >
      Dr. Dev
      </div>
      </div>




      <div className='flex justify-center items-center gap-[10px] sm:gap-[20px] lg:gap-[40px] mr-[10px] sm:mr-[30px] lg:mr-[70px]'>
      <button className='text-clearIce text-[15px] pr-[5px] pl-[5px] sm:p-[6px] border-solid border-clearIce border-[2px] hover:bg-clearIceFullLight hover:text-red-950 hover:font-bold'>Home</button>
      <button className='text-clearIce text-[15px] pr-[5px] pl-[5px] sm:p-[6px] border-solid border-clearIce border-[2px] hover:bg-clearIceFullLight hover:text-red-950 hover:font-bold'>Nuevo Lugar</button>
      </div>
    </div>
  )
}

export default Navbar