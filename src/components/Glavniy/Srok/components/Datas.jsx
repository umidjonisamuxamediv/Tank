import React,{useState,useEffect} from 'react'
import {db} from '../../../../firbaseConfig'
import { getDocs,collection } from "firebase/firestore";
import CountdownTimer from './CountdownTimer';
import rasim2 from '../../../../img/chevron-right.png'
const Datas = () => {
  const [conrtys,setContriys]=useState([])
    const contryses = collection(db,'srok')
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
    <div className='md:w-[70%] md:h-[7rem] h-[15rem] bg-[#252C2C] md:ml-[15%] mt-5 md:flex'>
      <div className='w-[30%] ml-[2%] flex items-center'>
        {conrtys.map((el)=>(
          <div className='text-sky-100 text-[30px]' key={el.id}>{el.name}</div>
        ))}
        
      </div>
      <CountdownTimer/>
      <button    className='flex md:p-1 md:mr-2 w-[99%] mt-[5%] p-2 md:mt-[2%] md:h-[60%] md:w-[50%] justify-center bg-[#FF9549] items-center rounded-[10px]'>
            {conrtys.map((el)=>(
                <div  className=' ml-1 ' key={el.id}>{el.uznat}</div>
            ))}
            <img className='h-[20px] ml-1 mt-1' src={rasim2} alt="" />
        </button>
    </div>
  )
}

export default Datas
