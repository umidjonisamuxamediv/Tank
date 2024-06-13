import React,{useState,useEffect} from 'react'
import {db} from '../../../../firbaseConfig'
import { getDocs,collection } from 'firebase/firestore'
import rasim from '../../../../img/image 290.png'
const Obmenit = () => {
    const [conrtys,setContriys]=useState([])
    const contryses = collection(db,'obmen')
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
    <div className='w-full flex justify-center mt-9 items-center'>
      <div className='w-full md:w-[70%] flex flex-col md:flex-row'>
        <div className='p-5'>
            <img src={rasim} alt="" />
        </div>
        <div className='p-5 '>
            {conrtys.map((el)=>(
                <div className='text-white md:text-[40px]' key={el.id}>{el.obmen}</div>
            ))}
            <button onClick={()=>alert('ok')} className='w-[100%] md:w-[40%] bg-[#FF9549] p-3 rounded-[10px] mt-4'>
                {conrtys.map((el)=>(
                    <div key={el.id}>{el.button}</div>
                ))}
            </button>
        </div>
      </div>
    </div>
  )
}

export default Obmenit
