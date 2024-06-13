import React from 'react'

const CountdownTimer = () => {
  return (
    <div className='w-[100%] flex items-center text-white md:ml-9'>
      <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] border-2 border-[#FF9549] rounded-[50%] flex justify-center items-center md:ml-3 text-[20px]'>3 <br /><h5 className='block text-[15px]'>дня</h5></div>
      <div className='text-[40px] md:ml-5 font-bold ml-2 mr-2'>:</div>
      <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] border-2 border-[#FF9549] rounded-[50%] flex justify-center items-center md:ml-3 text-[20px]'>06 <br /> <h5 className='block text-[15px]'>часов</h5></div>
      <div className='text-[40px] md:ml-5 font-bold ml-2 mr-2'>:</div>
      <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] border-2 border-[#FF9549] rounded-[50%] flex justify-center items-center md:ml-3 text-[20px]'>14 <br /><h5 className='block text-[15px]'>минут</h5></div>
      <div className='text-[40px] md:ml-5 font-bold ml-2 mr-2'>:</div>
        <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] border-2 border-[#FF9549] rounded-[50%] flex justify-center items-center md:ml-3 text-[20px]'>55 <br /> <h5 className='block text-[15px]'>секунд</h5></div>
    </div>


  )
}

export default CountdownTimer
