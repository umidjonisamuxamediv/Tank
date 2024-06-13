import React,{useState, useEffect} from 'react'
import rasim from '../../../img/image 289(5).png'
import rasim1 from '../../../img/image 289(6).png'
import rasim2 from '../../../img/vtnrf.png'
import {db} from '../../../firbaseConfig'
import { collection,getDocs } from 'firebase/firestore'
const Lokation = () => {
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
    <div className='w-full  mt-9 '>
        <div className='flex justify-center'>
        <img className='md:flex hidden' src={rasim} alt="" />
      <img className=' md:hidden' src={rasim1} alt="" />
      
        </div>
        <img className='absolute top-[1015%]  left-[43%] md:top-[607%] md:left-[48%]' src={rasim2} alt="" />
      <div className='absolute w-[80%] top-[1030%] md:top-[627%] md:w-[70%] bg-[#1C2121] p-2 m-9 md:ml-[15%] flex flex-col md:flex-row justify-around'>
            <div className='p-2  md:w-[20%]'>
                {conrtys.map((el)=>(
                    <div className='text-[#939697]' key={el.id}>{el.adres}</div>
                ))}
                {conrtys.map((el)=>(
                    <div className='text-white w-[100%]' key={el.id}>{el.lokation}</div>
                ))}
            </div>
            <div className='p-3'>
            {conrtys.map((el)=>(
                    <div className='text-[#939697]' key={el.id}>{el.telo}</div>
                ))}
                {conrtys.map((el)=>(
                    <div className='text-white ' key={el.id}>{el.number}</div>
                ))}
                {conrtys.map((el)=>(
                    <div className='text-white ' key={el.id}>{el.svyaz}</div>
                ))}
            </div>
            <div>
            {conrtys.map((el)=>(
                    <div  className='text-white ' key={el.id}>{el.rejims}</div>
                ))}
                {conrtys.map((el)=>(
                    <div className='text-white ' key={el.id}>{el.chas}</div>
                ))}
            </div>
            <button className='p-5 m-5 flex-items-center bg-[#FF9549] rounded-[10px]'>
            {conrtys.map((el)=>(
                    <div key={el.id}>{el.tel}</div>
                ))}
            </button>
      </div>
    </div>
  )
}

export default Lokation
