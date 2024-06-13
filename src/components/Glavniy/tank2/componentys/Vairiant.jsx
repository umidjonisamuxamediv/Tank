import React,{useState,useEffect} from 'react'
import {db} from '../../../../firbaseConfig'
import { getDocs,collection } from "firebase/firestore";
import rasim from '../../../../img/clipboard-check(1).png'
import rasim1 from '../../../../img/certificate.png'
import rasim2 from '../../../../img/tag-01.png'
import rasim3 from '../../../../img/sale.png'
import rasim4 from '../../../../img/image 285(3).png'
import rasim5 from '../../../../img/image 286(3).png'
import rasim6 from '../../../../img/image 288(1).png'
import rasim7 from '../../../../img/image 288(2).png'
import rasim8 from '../../../../img/image 289(1).png'
 const images= [rasim4,rasim5,rasim6,rasim7,rasim8]
const Variant = () => {
    const [data,setData]=useState({img:'',i:0})
    const viewImage =(img,i)=>{
        setData({img,i})
    }
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
  return (
    <>
    {data.img &&
    <div className='w-[100%] h-[150vh] bg-[#181818] bg-[90%] left-[10%] flex justify-center flex-col items-center overflow-auto'>
        <button className='absolute md:top-[220%] md:right-10 text-white text-[20px]   right-10 top-[265%]' onClick={()=>viewImage()}>x</button>
        <img className='w-[50%] md:h-[50%]' src={data.img} alt="" />
        <button onClick={()=>viewImage()} className='flex p-2 '  >
            {images.map((image)=>(
                <img
                className='p-2'
                src={image}
                />
            ))}
        </button>
    </div>
    }
    <div className='w-full  mt-5  '>
        <div className='md:w-[70%] p-2 md:flex md:flex-row md:ml-[15%]'>
        <div className='md:w-[25%] items-center bg-[#181818] m-4 rounded-[10px]  flex p-2  '>
            <img src={rasim}  className='p-4'alt="" />
            {conrtys.map((el)=>(
                <div className='text-white' key={el.id}>{el.nalichka}</div>
            ))}
        </div>
        <div className='md:w-[25%] items-center bg-[#181818] m-4 rounded-[10px]  flex p-2  '>
            <img src={rasim1} className='p-4' alt="" />
            {conrtys.map((el)=>(
                <div className='text-white' key={el.id}>{el.servis}</div>
            ))}
        </div>
        <div className='md:w-[25%] items-center bg-[#181818] m-4 rounded-[10px]  flex p-2  '>
            <img src={rasim2} className='p-4' alt="" />
            {conrtys.map((el)=>(
                <div className='text-white' key={el.id}>{el.prodaja}</div>
            ))}
        </div>
        <div className='md:w-[25%] items-center bg-[#181818] m-4 rounded-[10px]  flex p-2  '>
            <img src={rasim3} className='p-4' alt="" />
            {conrtys.map((el)=>(
                <div className='text-white' key={el.id}>{el.kredit}</div>
            ))}
        </div>
        </div>
        <div className='md:w-[70%] md:ml-[15%] mt-5 flex flex-row scroll-auto  '>
        <div className='p-2 cursor-pointer flex overflow-auto'>
            {images.map((image,i)=>(
                <img
                className='p-2 background-attachment:fixed '
                key={i}
                src={image}
                onClick={()=>viewImage(image,i)}
                />
            ))}
        </div>
        
        </div>
    </div>
    </>
  )
}

export default Variant
