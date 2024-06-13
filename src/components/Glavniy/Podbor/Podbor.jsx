import React,{useState,useEffect} from 'react'
import {db} from '../../../firbaseConfig'
import { getDocs,collection } from "firebase/firestore";
import Cardss from './components/Cardss';
import Obmenit from './components/Obmenit';
const Podbor = () => {
    const [conrtys,setContriys]=useState([])
    const contryses = collection(db,'berite')
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
    <div className='w-full mt-5 mb-5 '>
      {conrtys.map((el)=>(
        <div className='text-white text-[40px] text-center ' key={el.id}>{el.name}</div>
      ))}
      <div className='md:w-[70%] p-2 flex flex-col md:flex-row md:ml-[15%]'>
        <div className='md:w-[30%] w-[99%]  p-2 '>
            {conrtys.map((el)=>(
                <div className='text-[#939697]' key={el.id}>{el.model}</div>
            ))}
            <select className='md:w-[100%] p-2 m-2 bg-[#252C2C] border-2 border-[#939697] text-white'  name="" id="">
                {conrtys.map((el)=>(
                    <option key={el.id}>{el.tank}</option>
                ))}
                {conrtys.map((el)=>(
                    <option key={el.id}>{el.tank}</option>
                ))}
                {conrtys.map((el)=>(
                    <option key={el.id}>{el.tank}</option>
                ))} 
            </select>
        </div>
        <div className='w-[30%] p-2 '>
            {conrtys.map((el)=>(
                <div className='text-[#939697]' key={el.id}>{el.komp}</div>
            ))}
            <select className='md:w-[100%] p-2 m-2 bg-[#252C2C] border-2 border-[#939697] text-white' name="" id="">
                {conrtys.map((el)=>(
                    <option key={el.id}>{el.tank}</option>
                ))}
                {conrtys.map((el)=>(
                    <option key={el.id}>{el.tank}</option>
                ))}
                {conrtys.map((el)=>(
                    <option key={el.id}>{el.tank}</option>
                ))} 
            </select>
        </div>
        <div className='md:w-[30%] p-2 '>
            {conrtys.map((el)=>(
                <div className='text-[#939697]' key={el.id}>{el.divigetel}</div>
            ))}
            <select className='md:w-[100%] p-2 m-2 bg-[#252C2C] border-2 border-[#939697] text-white' name="" id="">
                {conrtys.map((el)=>(
                    <option key={el.id}>{el.tank}</option>
                ))}
                {conrtys.map((el)=>(
                    <option key={el.id}>{el.tank}</option>
                ))}
                {conrtys.map((el)=>(
                    <option key={el.id}>{el.tank}</option>
                ))} 
            </select>
        </div>
            
      </div>
      <Cardss/>
      <div className='w-full flex justify-center'>
      <button className='text-white p-2 border-2 border-[#fff] md:w-[10%] p-2 h-[20%] mt-5 text-center'>
        {conrtys.map((el)=>(
            <div className='w-' key={el.id}>{el.ke}</div>
        ))}
      </button>
      
      </div>
      <Obmenit/>
    </div>
  )
}

export default Podbor
