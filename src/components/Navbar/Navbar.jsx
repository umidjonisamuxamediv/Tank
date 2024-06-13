import React,{useState,useEffect} from 'react'
import rasim from "../../img/logo.445e7b59 1.png"
import rasim1 from '../../img/marker-pin-01.png'
import {db} from '../../firbaseConfig'
import { getDocs,collection } from "firebase/firestore";

import rasim2 from '../../img/Icon(3).png'
import rasim3 from '../../img/speedometer-04.png'
import rasim4 from '../../img/phone-incoming-01.png'
import rasim5 from '../../img/Link.png'
import rasim6 from '../../img/Link(1).png'
import rasim7 from '../../img/clock.png'
const Navbar = () => {
    const [open,setOpen]=useState(false)
    const [conrtys,setContriys]=useState([])
    const contryses = collection(db,'test')
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
    <div className='w-full  flex  md:justify-center '>
        <div className='md:w-[70%]    w-full flex  ml-4 items-center '>
            <div className='w-[11%] md:w-[10%] ml-1 mt-3 md:mt-[-5px]  flex items-center  justify-center  '>
                <img  src={rasim} alt=""  />
            </div>
            <div className='md:w-[90%]  md:block hidden  '>
                <div className='flex justify-between items-center p-1 w-full'>
                <div className='flex  w-[66%]'>
                    <div className=' text-[#939697] flex ' >
                        <img src={rasim1} alt="" className='pr-1' />
                        {conrtys.map((el)=>(
                            <div key={el.id}>{el.lokation}</div>
                        ))}
                    </div>
                    
                </div>
                <div className='w-[34%] flex justify-between p-1'>
                        <div className='w-[50%] flex justify-between cursor-pointer '>
                            <img src={rasim2}  className='w-[10%] text-[#FF9549] ' alt="" />
                            {conrtys.map((el)=>(
                                <div  className='text-[#FFFFFF]' key={el.id}>{el.nastroyka}</div>
                            ))}
                        </div>
                        <div className='w-[30%] flex justify-between cursor-pointer'>
                            <img src={rasim3}  className='w-[18%] ' alt="" />
                            {conrtys.map((el)=>(
                                <div  className='text-[#FFFFFF]' key={el.id}>{el.testi}</div>
                            ))}
                        </div>
                    </div>
                <div>
                </div>
                </div>
                <div className='w-full flex  justify-between border-t-2 border-slate-500'>
                    <div className=' w-[50%] flex flex-row'>
                        <div className=''>
                            {conrtys.map((el)=>(
                                <div key={el.id} className='pl-1 text-sky-100 text-[33px]'>{el.name}</div>
                            ))}
                        </div>
                        
                        <div className=' border-l-2 flex items-center ml-3 font-thin border-slate-500 m-2'>
                            {conrtys.map((el)=>(
                                <div key={el.id} className='pl-3 text-[#FFFFFF] text-[18px]'>{el.diller}</div>
                            ))}
                        </div>
                    </div>
                    <div className=' w-[40%] flex flex-row mt-2'>
                        <div className=''>
                            <div>
                                {conrtys.map((el)=>(
                                    <div className='text-[#FFFFFF] text-[22px]' key={el.id}>{el.number}</div>
                                ))}
                            </div>
                            <div className='w-full flex items-center justify-end '>
                                <div className='w-[8px] h-[8px] bg-green-500 mr-2 rounded-[50%]'></div>
                                {conrtys.map((el)=>(
                                    <div className='text-[#FFFFFF] text-end' key={el.id}>{el.svyaz}</div>
                                ))}
                            </div>
                        </div>
                        <button className='bg-[#FF9549] w-[45%] h-[3rem] flex justify-center items-center ml-9 rounded-[18px] hover:bg-[#0000] hover:border-2 hover:border-[#FF9549] hover:text-sky-100'>
                            <a href="tel:+7 (999) 999-99-99" className='flex'>
                            <img className='mr-2 ' src={rasim4} alt="" />
                            {conrtys.map((el)=>(
                                <div key={el.id}>{el.tel}</div>
                            ))}
                            </a>
                        </button>
                    </div>
                </div>
                
            </div>
            <div className='md:hidden flex w-full'>
                <div className=' w-[80%] ml-2'>
                        <div className=''>
                            {conrtys.map((el)=>(
                                <div key={el.id} className=' text-sky-100 text-[14px]'>{el.name2}</div>
                            ))}
                        </div>
                        
                        <div className=' flex  font-thin  '>
                            {conrtys.map((el)=>(
                                <div key={el.id} className=' text-[#FFFFFF] text-[13px]'>{el.diller}</div>
                            ))}
                        </div>
                        
                    </div>
                    <div className='flex items-center w-[20%] h-[3rem]'>
                        <a href="tel:+7 (999) 999-99-99">
                        <img src={rasim5} className='' alt="" />
                        </a>
                    
                    <div onClick={()=>setOpen(!open)}  className='w-[30px] right-1 cursor-pointer absolute top-5'>
                           <img name={open?'close':'menu'} src={rasim6} alt="" />     
                    </div>
                    <div className={` absolute  w-[98%] bg-[#181818] h-[80vh] left-1 flex flex-col   ${open ? 'top-[10%]':'top-[-100vh]'}`}>
                    <div className=''>
                            {conrtys.map((el)=>(
                                <div key={el.id} className=' text-sky-100 text-[20px] ml-5 mt-5'>{el.name2}</div>
                            ))}
                        </div>
                        
                        <div className=' flex  font-thin  '>
                            {conrtys.map((el)=>(
                                <div key={el.id} className=' text-[#FFFFFF] text-[14px] ml-5 '>{el.diller}</div>
                            ))}
                        </div> 
                        <div className='ml-4  mt-9'>
                        <div className=''>
                            <div>
                                {conrtys.map((el)=>(
                                    <div className='text-[#FFFFFF] text-[33px]' key={el.id}>{el.number}</div>
                                ))}
                            </div>
                            <div className='w-full flex items-center mt-2 '>
                                <div className='w-[8px] h-[8px] bg-green-500 mr-2 rounded-[50%]'></div>
                                {conrtys.map((el)=>(
                                    <div className='text-[#FFFFFF] text-end' key={el.id}>{el.svyaz}</div>
                                ))}
                            </div>
                        </div>
                        <div className=' text-[#939697] flex w-[90%] mt-9 ' >
                        <img  src={rasim1} alt="" className='pr-1 w-[10%] h-[5%] mt-1' />
                        {conrtys.map((el)=>(
                            <div key={el.id}>{el.lokation}</div>
                        ))}
                    </div>
                    <div className='flex text-[#939697] mt-4'>
                        <img className='mr-1' src={rasim7} alt="" />
                        {conrtys.map((el)=>(
                            <div key={el.id}>{el.chas}</div>
                        ))}
                    </div>
                        <button className='bg-[#FF9549] w-[95%] h-[3rem] flex justify-center items-center mt-9 rounded-[14px] hover:bg-[#0000] hover:border-2 hover:border-[#FF9549] hover:text-sky-100'>
                            <a href="tel:+7 (999) 999-99-99" className='flex'>
                            <img className='mr-2 ' src={rasim4} alt="" />
                            {conrtys.map((el)=>(
                                <div key={el.id}>{el.tel}</div>
                            ))}
                            </a>
                        </button>
                        <div className='w-[100%] flex justify-center items-center cursor-pointer mt-9 '>
                            <img src={rasim2}  className='w-[8%] text-[#FF9549] mr-1 ' alt="" />
                            {conrtys.map((el)=>(
                                <div  className='text-[#FFFFFF]' key={el.id}>{el.nastroyka}</div>
                            ))}
                        </div>
                        <div className='w-[100%] flex justify-center items-center cursor-pointer mt-7'>
                            <img src={rasim3}  className='w-[8%] mr-1 ' alt="" />
                            {conrtys.map((el)=>(
                                <div  className='text-[#FFFFFF]' key={el.id}>{el.testi}</div>
                            ))}
                        </div>
                    
                    </div>  
                    </div>
                </div>
                </div>
                
        </div>
    </div>
  )
}

export default Navbar
