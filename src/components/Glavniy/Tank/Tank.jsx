import React,{useState,useEffect} from 'react'
import {db} from '../../../firbaseConfig'
import { getDocs,collection } from "firebase/firestore";
import rasim from '../../../img/img(4).png'
import rasim1 from '../../../img/img(3).png'
import rasim2 from '../../../img/img(2).png'
import rasim3 from '../../../img/img(1).png'
import rasim4 from '../../../img/img.png'
import rasim5 from '../../../img/warning.png'
import rasim6 from '../../../img/chevron-right(1).png'
import rasim7 from '../../../img/chevron-right.png'
import Kredit from './components/Kredit';
const Tank = () => {
    
    const [opens, setOpens] = useState();
    
    const ArryTank=[
        rasim,
        rasim1,
        rasim2,
        rasim3,
        rasim4
    ]
    const [conrtys,setContriys]=useState([])
    const contryses = collection(db,'tank')
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
      console.log('setOpen' ,opens)
  return (
    <div className='bg-[#1C2121] w-full'>
    <div className='p-2 md:w-[70%] md:ml-[15%] mt-5 pt-5 pb-9 flex flex-col md:flex-row'>
      <div className='flex flex-col md:flex-row '>
        <div className='flex flex-col hidden md:flex'>
            {conrtys.map((el)=>(
                <div className='text-[#FF9549] text-[20px]' key={el.id}>{el.title}</div>
            ))}
            {conrtys.map((el)=>(
                <div className='text-[#FFFFFF] text-[40px]' key={el.id}>{el.Tank}</div>
            ))}
            {conrtys.map((el)=>(
                <div className='text-[#FFFFFF] text-[30px]' key={el.id}>{el.sum}</div>
            ))}
            <div className=' mt-5 md:w-[100%] p-2 flex text-white bg-[#FF2B00] rounded-[10px]'>
                <img className='pr-2' src={rasim5} alt="" />
            {conrtys.map((el)=>(
                <div key={el.id}>{el.sum}</div>
            ))}
            <img className='pl-2' src={rasim5} alt="" />
            </div>
            <button className='p-4 mt-5 bg-[#FF9549] rounded-[10px] flex justify-center'>
            {conrtys.map((el)=>(
                <div key={el.id}>{el.button}</div>
            ))}
            <img src={rasim7} alt="" />
            </button>
            <button className='p-4 mt-3 border-2 border-[#FF9549] rounded-[10px] text-white flex justify-center'>
            {conrtys.map((el)=>(
                <div key={el.id}>{el.button1}</div>
            ))}
            <img src={rasim6} alt="" />
            </button>
            <button className='p-4 mt-3 rounded-[10px] border-2 border-[#FF9549] text-white flex justify-center'>
            {conrtys.map((el)=>(
                <div key={el.id}>{el.button2}</div>
            ))}
            
            </button>
            </div>
            
        </div>
        <div className='w-full flex  ' >
           
              <img  className='w-[100%]' src={rasim} alt="" /> 
            <div className='mt-[10%]'>
            {ArryTank?.map((el)=>(
                <div className='w-[50px]  h-[50px] rounded-[50%] m-2   ' onClick={()=>setOpens(el)} style={{backgroundColor:el}}></div>
            ))}
            </div>
              {conrtys.map((el)=>(
                <div className='bg-[#FF9549] top-[186%] md:top-[170%] origin-center rotate-12 text-[12px]   md:text-[17px] left-[60%] md:left-[68%] w-[30%] md:w-[10%] text-center rounded-[15px] absolute ' key={el.id}>{el.octatk}</div>
              ))}
        </div>
        <div className='flex flex-col  md:hidden'>
            {conrtys.map((el)=>(
                <div className='text-[#FF9549] text-[20px]' key={el.id}>{el.title}</div>
            ))}
            {conrtys.map((el)=>(
                <div className='text-[#FFFFFF] text-[40px]' key={el.id}>{el.Tank}</div>
            ))}
            {conrtys.map((el)=>(
                <div className='text-[#FFFFFF] text-[30px]' key={el.id}>{el.sum}</div>
            ))}
            <div className=' mt-5 md:w-[100%] p-2 flex text-white bg-[#FF2B00] rounded-[10px]'>
                <img className='pr-2' src={rasim5} alt="" />
            {conrtys.map((el)=>(
                <div key={el.id}>{el.sum}</div>
            ))}
            <img className='pl-2' src={rasim5} alt="" />
            </div>
            <button className='p-4 mt-5 bg-[#FF9549] rounded-[10px] flex justify-center'>
            {conrtys.map((el)=>(
                <div key={el.id}>{el.button}</div>
            ))}
            <img src={rasim7} alt="" />
            </button>
            <button className='p-4 mt-3 border-2 border-[#FF9549] text-white flex justify-center'>
            {conrtys.map((el)=>(
                <div key={el.id}>{el.button1}</div>
            ))}
            <img src={rasim6} alt="" />
            </button>
            <button className='p-4 mt-3 border-2 border-[#FF9549] text-white flex justify-center'>
            {conrtys.map((el)=>(
                <div key={el.id}>{el.button2}</div>
            ))}
            
            </button>
            </div>
            
        
                
      </div>
      <Kredit/>
      </div>
  )
}

export default Tank
