import React,{useState,useEffect} from 'react'
import {db} from '../../../firbaseConfig'
import { getDocs,collection } from "firebase/firestore";
import rasim from '../../../img/rasim.png'
import rasim1 from '../../../img/rasim1.png'
const Zarabota = () => {
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
    <div className=' p-2 mt-5 md:w-[60%] md:ml-[20%]'>
      <div className='text-white '>
        {conrtys.map((el)=>(
            <div className='md:text-[40px] text-[28px] text-center' key={el.id}>{el.rabota}</div>
        ))}
      </div>
      <div className='flex flex-row mt-4 justify-center'>
            <div className='ml-2 text-white text-center'>
                 <img src={rasim} alt="" /> 
                 <div>Tank 300</div>      
            </div>
            <div className='ml-2 text-white text-center'>
            <img src={rasim1} alt="" /> 
            <div>Tank 500</div>
            </div>
      </div>    
    </div>
  )
}

export default Zarabota
