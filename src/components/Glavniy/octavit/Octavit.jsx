import React,{useState,useEffect} from 'react'
import rasim from '../../../img/image 281.png'
import rasim1 from '../../../img/image 281(1).png'
import {db} from '../../../firbaseConfig'
import { getDocs,collection } from 'firebase/firestore'

const Octavit = () => {
    const [conrtys,setContriys]=useState([])
    const contryses = collection(db,'octavit')
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
    <div className='w-full ml-3 md:ml-0'>
        <img className='hidden md:flex' src={rasim} alt="" />
        <img src={rasim1} className='md:hidden' alt="" />
        <div className='md:w-[70%] absolute top-[880%]  left-[10%] md:top-[530%] md:left-[15%] '>
            {conrtys.map((el)=>(
                <div className='text-white text-[40px] w-[90%] md:w-[27%]' key={el.id}>{el.titile}</div>
            ))}
            {conrtys.map((el)=>(
                <div className='text-white ' key={el.id}>{el.name}</div>
            ))}
            <div className='mt-5'>
            {conrtys.map((el)=>(
                <div className='text-[#939697]' key={el.id}>{el.tel}</div>
            ))}
           
            
            <div className='md:flex'>
            <input className='md:w-[25%] w-[90%] border-[#939697] bg-[#252C2C] p-2 rounded-[10px]' type="telfon" name="" id="" placeholder='+7 (___) ___-__-__' />
            {conrtys.map((el)=>(
               <button onClick={()=>alert('ok')} className='w-[90%] md:w-[20%] bg-[#FF9549] p-2 md:ml-4 rounded-[10px] mt-5 md:mt-0 ' key={el.id}>{el.otprav}</button>
            ))}
            </div>
            </div>
            <div className='flex mt-5'>
            <input type="checkbox" className='border-[#939697] bg-[#252C2C] ' name="" id="" />
            {conrtys.map((el)=>(
                <div className='text-[#939697] ml-2' key={el.id}>{el.chakpok}</div>
            ))}
            
            </div>
        </div>
    </div>
  )
}

export default Octavit
