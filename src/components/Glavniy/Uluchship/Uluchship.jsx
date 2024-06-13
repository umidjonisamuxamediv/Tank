import React, {useState,useEffect} from 'react'
import rasim from '../../../img/image 285.png'
import rasim1 from '../../../img/image 285(1).png'
import rasim2 from '../../../img/chevron-right.png'
import rasim3 from '../../../img/x-close.png'
import {db} from '../../../firbaseConfig'
import { getDocs,collection } from "firebase/firestore";

const Uluchship = () => {

    const [open,setOpen]=useState(false)
    const [conrtys,setContriys]=useState([])
    const contryses = collection(db,'ulushit')
      useEffect(()=>{
        const setings =async()=>{
          const data = await getDocs(contryses)
          let array =[]
          data.forEach(doc=>{
            const dataDoc=doc.data()
            const fullDoc ={id: doc.id,  ...dataDoc}
            array.push(fullDoc)
            
          })
          setContriys(array)
        }
        setings()
      },[])
  return (
    <div className='w-full mt-7'>
        <form action="">
      <img className='hidden md:flex' src={rasim} alt="" />
      <img className='md:hidden w-full' src={rasim1} alt="" />
      <div className='md:absolute  md:top-[35%] md:left-[17.5%] mt-5 md:mt-0'>
        {conrtys.map((el)=>(
            <div>
                <div className='text-sky-100 md:text-[28px] text-[18px]' key={el.id}>{el.name}</div>
                <div className='text-sky-100 md:text-[60px] text-[40px] ' key={el.id}>{el.tank}</div>
                <div className='text-sky-100 md:text-[28px] text-[18px] ' key={el.id}>{el.octalis}</div>
            </div>
        ))}
        <button onClick={()=>setOpen(!open)}   className='flex pt-3 pb-3 md:p-3 w-[99%] md:w-[75%] justify-center bg-[#FF9549] items-center mt-5 pl-7 pr-7 rounded-[10px]'>
            {conrtys.map((el)=>(
                <div name={open?'close':'menu'} className=' ml-1 ' key={el.id}>{el.button}</div>
            ))}
            <img className='h-[20px] ml-1 mt-1' src={rasim2} alt="" />
        </button>
        
      </div>
      <div className={` absolute  w-[100%] h-[100vh] bg-[#181818]   flex flex-col   ${open ? 'top-[1%]':'top-[-100vh]'}`}>
                   <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-[345px] h-[525px] md:w-[555px] md:h-[520px] bg-[#1C2121] rounded-[10px]'>
                            <img onClick={()=>setOpen(!open)} className='ml-[92%] mt-[3%]' src={rasim3} alt="" />
                            {conrtys.map((el)=>(
                                <div className='w-[65%] ml-[20%] text-center text-sky-100'>
                                    <div className='text-[30px]' key={el.id }>{el.poluchit}</div>
                                    <div className='' key={el.id}>{el.minut}</div>
                                </div>
                            ))}
                            <div className='w-[90%] md:w-[65%] ml-5 md:ml-[20%]  text-[#939697] mt-5'>
                                {conrtys.map((el)=>(
                                    <div  key={el.id}>{el.model}</div>
                                ))}
                                <select required className='w-[100%] bg-[#252C2C] border-2 border-[#939697]  p-2 text-[#939697] mt-5'>
                                {conrtys.map((el)=>(
                                <option key={el.id}>{el.tanks}</option>
                                        
                                ))}
                                {conrtys.map((el)=>(
                                    <option key={el.id}>{el.tanks}</option>
                                            
                                    ))}
                                   {conrtys.map((el)=>(
                                    <option key={el.id}>{el.tanks}</option>
                                            
                                    ))}
                                    {conrtys.map((el)=>(
                                    <option key={el.id}>{el.tanks}</option>
                                            
                                    ))}
                                    {conrtys.map((el)=>(
                                    <option key={el.id}>{el.tanks}</option>
                                            
                                    ))} 
                                </select>
                               
                            </div>
                            <div className='w-[90%] ml-[5%]  md:w-[65%] md:ml-[20%]  text-[#939697] mt-5'>
                                {conrtys.map((el)=>(
                                    <div key={el.id}>{el.tel}</div>
                                ))}
                            <input type="phone" required className='w-[100%] bg-[#252C2C] border-2 border-[#939697]  p-2 text-[#939697] mt-5' />
                         </div>
                         <div className='md:w-[65%] md:ml-[20%]  w-[90%]  ml-5  mt-5 text-center'>
                         <button onClick={(e)=>alert(e.target.value)}  className='flex w-full pt-3 pb-3 justify-center  bg-[#FF9549] items-center mt-5 pl-7 pr-7 rounded-[10px]'>
            {conrtys.map((el)=>(
                <div  className=' ml-1 ' key={el.id}>{el.button}</div>
            ))}
            <img className='h-[20px] ml-1 mt-1' src={rasim2} alt="" />
        </button>
                         </div>
                    </div>

                    </div> 
        </div>
        </form>
    </div>
  )
}

export default Uluchship
