import React,{useState,useEffect} from 'react'
import {db} from '../../../firbaseConfig'
import { getDocs,collection } from 'firebase/firestore'
import rasim from '../../../img/image 295.png'
const Girls = () => {
    const [conrtys,setContriys]=useState([])
    const contryses = collection(db,'girls')
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
    <div className='md:w-[70%] flex flex-col md:flex-row md:justify-between bg-[#1C2121] m-5 p-2 md:ml-[15%]'>
        <div className=''>
            {conrtys.map((el)=>(
                <div className=' w-full md:w-[75%] text-white text-[40px]' key={el.id}>{el.name}</div>
            ))}

            <button className='md:w-[25%] w-full p-3 mt-5 bg-[#FF9549] rounded-[10px]'>
            {conrtys.map((el)=>(
                <div key={el.id}>{el.button}</div>
            ))}
            </button>
        </div>
        <div className='flex  md:flex-row items-center mt-5'>
                <div className='mr-3'>
                    <img src={rasim} alt="" />
                </div>
                <div className=''>
                    {conrtys.map((el)=>(
                        <div className='text-white text-[24px]' key={el.id}>{el.imya}</div>
                    ))}
                    {conrtys.map((el)=>(
                        <div className='text-[#939697] md:w-[90%]' key={el.id}>{el.oddel}</div>
                    ))}
                </div>
        </div>
    </div>
  )
}

export default Girls
