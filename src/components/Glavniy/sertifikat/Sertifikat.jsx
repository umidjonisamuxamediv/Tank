import React,{useState,useEffect} from 'react'
import {db} from '../../../firbaseConfig'
import { getDocs,collection } from "firebase/firestore";
import rasim from '../../../img/Icon(4).png'
import rasim1 from '../../../img/clipboard-check.png'
import rasim2 from '../../../img/clock-rewind.png'
const Sertifikat = () => {
    const [conrtys,setContriys]=useState([])
    const contryses = collection(db,'sertifikat')
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
    <div className='md:w-[70%] md:ml-[15%] mt-5  flex flex-col md:flex-row md:justify-between'>
      <div className='md:w-[35%] flex m-2  rounded-[20%] '>
      <div className='w-full p-2 border-2 border-[#939697] flex items-center rounded-[20px] '>
      <img className='h-[55%] mr-3 ml-3 ' src={rasim} alt="" />
      <div className='text-white'>
        {conrtys.map((el)=>(
            <div className='tetx-sky-100 text-[23px]' key={el.id}>{el.name}</div>
        ))}
        {conrtys.map((el)=>(
            <div className='hidden md:flex tetx-white text-[16px]' key={el.id}>{el.text1}</div>
        ))}
        
      </div>
    </div> 
      </div>
      <div className='md:w-[35%] flex m-2 rounded-[20px]'>
      <div className='w-full p-2 border-2 border-[#939697] flex items-center rounded-[20px] '>
      <img className='h-[50%] mr-3 ml-3 ' src={rasim2} alt="" />
      <div className='text-white'>
        {conrtys.map((el)=>(
            <div className='tetx-sky-100 text-[23px]' key={el.id}>{el.name1}</div>
        ))}
        {conrtys.map((el)=>(
            <div className= ' hidden md:flex tetx-white text-[16px]' key={el.id}>{el.text}</div>
        ))}
        
      </div>
    </div> 
      </div>
      <div className='md:w-[35%] flex  m-2 '>
      <div className='w-full p-2 border-2 border-[#939697] flex items-center rounded-[20px] '>
      <img className='h-[50%] mr-3 ml-3 ' src={rasim1} alt="" />
      <div className='text-white'>
        {conrtys.map((el)=>(
            <div className='tetx-sky-100 text-[23px]' key={el.id}>{el.name2}</div>
        ))}
        {conrtys.map((el)=>(
            <div className='hidden md:flex tetx-white text-[16px]' key={el.id}>{el.text2}</div>
        ))}
        
      </div>
    </div> 
      </div>
    </div>
  )
}

export default Sertifikat
