import React,{useState,useEffect} from 'react'
import {db} from '../../../../firbaseConfig'
import { collection,getDocs } from 'firebase/firestore'
import rasim1 from '../../../../img/gift-02.png'
import rasim2 from '../../../../img/tag-01.png'
import rasim from '../../../../img/img(2).png'
const Cardss = () => {
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
    <div className='w-full flex flex-col justify-center'>
      <div className='md:w-[70%] flex flex-col md:flex-row p-5 border-2 mt-5 md:ml-[15%] border-[#939697]'>
        <div className='md:w-[30%]'>
          <img className='w-[100%]' src={rasim} alt="" />
        </div>
        <div>
          {conrtys.map((el)=>(
            <div className='text-[30px] text-white' key={el.id}>{el.title}</div>
          ))}
          {conrtys.map((el)=>(
            <div className='text-[18px] text-[#939697]' key={el.id}>{el.razmer}</div>
          ))}
          {conrtys.map((el)=>(
            <div className='text-[20px] text-white mt-3' key={el.id}>{el.sena}</div>
          ))}
          
          <div className='flex flex-col md:flex-row items-center w-[110%]'>
            <img className='w-[8%] h-[10%] pt-2 p-2' src={rasim2} alt="" />
          {conrtys.map((el)=>(
            <div className='text-[15px] text-white mt-3'  key={el.id}>{el.rubl}</div>
          ))}
          <img className='w-[8%] h-[10%] pt-2 p-2' src={rasim1} alt="" />
          {conrtys.map((el)=>(
            <div className='text-[15px] text-white mt-3'  key={el.id}>{el.keramik}</div>
          ))}
          </div>
        </div>
        <div className='flex flex-col'>
          <button className='p-3 bg-[#FF9549] pl-5 pr-5 rounded-[10px]'>
            {conrtys.map((el)=>(
              <div key={el.id}>{el.button}</div>
            ))}
          </button>
          <button className='p-3 border-2 text-white border-[#FF9549] mt-3 pl-5 pr-5 rounded-[10px]'>
            {conrtys.map((el)=>(
              <div key={el.id}>{el.button2}</div>
            ))}
          </button>
        </div>
      </div>
      <div className='md:w-[70%] flex flex-col md:flex-row p-5 border-2 mt-5 md:ml-[15%] border-[#939697]'>
        <div className='md:w-[30%]'>
          <img className='w-[100%]' src={rasim} alt="" />
        </div>
        <div>
          {conrtys.map((el)=>(
            <div className='text-[30px] text-white' key={el.id}>{el.title}</div>
          ))}
          {conrtys.map((el)=>(
            <div className='text-[18px] text-[#939697]' key={el.id}>{el.razmer}</div>
          ))}
          {conrtys.map((el)=>(
            <div className='text-[20px] text-white mt-3' key={el.id}>{el.sena}</div>
          ))}
          
          <div className='flex flex-col md:flex-row items-center w-[110%]'>
            <img className='w-[8%] h-[10%] pt-2 p-2' src={rasim2} alt="" />
          {conrtys.map((el)=>(
            <div className='text-[15px] text-white mt-3'  key={el.id}>{el.rubl}</div>
          ))}
          <img className='w-[8%] h-[10%] pt-2 p-2' src={rasim1} alt="" />
          {conrtys.map((el)=>(
            <div className='text-[15px] text-white mt-3'  key={el.id}>{el.keramik}</div>
          ))}
          </div>
        </div>
        <div className='flex flex-col'>
          <button className='p-3 bg-[#FF9549] pl-5 pr-5 rounded-[10px]'>
            {conrtys.map((el)=>(
              <div key={el.id}>{el.button}</div>
            ))}
          </button>
          <button className='p-3 border-2 text-white border-[#FF9549] mt-3 pl-5 pr-5 rounded-[10px]'>
            {conrtys.map((el)=>(
              <div key={el.id}>{el.button2}</div>
            ))}
          </button>
        </div>
      </div>
      <div className='md:w-[70%] flex flex-col md:flex-row p-5 border-2 mt-5 md:ml-[15%] border-[#939697]'>
        <div className='md:w-[30%]'>
          <img className='w-[100%]' src={rasim} alt="" />
        </div>
        <div>
          {conrtys.map((el)=>(
            <div className='text-[30px] text-white' key={el.id}>{el.title}</div>
          ))}
          {conrtys.map((el)=>(
            <div className='text-[18px] text-[#939697]' key={el.id}>{el.razmer}</div>
          ))}
          {conrtys.map((el)=>(
            <div className='text-[20px] text-white mt-3' key={el.id}>{el.sena}</div>
          ))}
          
          <div className='flex flex-col md:flex-row items-center w-[110%]'>
            <img className='w-[8%] h-[10%] pt-2 p-2' src={rasim2} alt="" />
          {conrtys.map((el)=>(
            <div className='text-[15px] text-white mt-3'  key={el.id}>{el.rubl}</div>
          ))}
          <img className='w-[8%] h-[10%] pt-2 p-2' src={rasim1} alt="" />
          {conrtys.map((el)=>(
            <div className='text-[15px] text-white mt-3'  key={el.id}>{el.keramik}</div>
          ))}
          </div>
        </div>
        <div className='flex flex-col'>
          <button className='p-3 bg-[#FF9549] pl-5 pr-5 rounded-[10px]'>
            {conrtys.map((el)=>(
              <div key={el.id}>{el.button}</div>
            ))}
          </button>
          <button className='p-3 border-2 text-white border-[#FF9549] mt-3 pl-5 pr-5 rounded-[10px]'>
            {conrtys.map((el)=>(
              <div key={el.id}>{el.button2}</div>
            ))}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cardss
