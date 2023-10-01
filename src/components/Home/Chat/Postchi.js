import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Postchi = () => {
    const [data, setData] = useState(null)
    const getDate = (date) => {
        let correctDate;
        let nowDate = Date.now() / 1000
        let exactDate = Math.ceil((nowDate - date) / 60)
        let unit = 'لحظاتی '
        if (exactDate > 4) {
        // exactDate = 0
        unit = 'دقیقه'
        }
    
    
        if (exactDate > 1440) {
        exactDate = Math.round(exactDate / 1440)
        unit = 'روز'
        }
    
    
        if (exactDate > 60) {
        exactDate = Math.round(exactDate / 60)
        unit = 'ساعت'
    }
    
    correctDate = (unit === 'لحظاتی ') ? (unit  + " پیش") : exactDate + " " + unit  + " پیش"
    return correctDate;
        }

        useEffect(()=> {
            const sendReq = async () =>{
                const dummydata = [{"post":"آگهی | فروش واحد ۱۰۳ متری در کوروش | منتشر شد.","date":1696053405}]
                setData(dummydata)
            }
            sendReq()
        },[])
        



  return (
    <SkeletonTheme baseColor="#7c7c7c" highlightColor="#a1a1a1" inline="true" duration={"3"} height={30} borderRadius={"0.75rem"}>
    <Link to="/"><div className='pt-[22px] bg-[rgba(240,250,255,.24)] cursor-pointer block'>
    <div className="flex">
        <div className='flex-1 w-[70%]'>
        <div className="flex items-center m-[0_0_10px]">
            <div className='ml-[8px] relative'>
                <div className="w-[48px] h-[48px]">
                    <picture className="mb-[100%] h-[100%] rounded-[5px] block overflow-hidden relative w-[100%]">
                      <img className='block w-[100%] h-[100%] left-0 top-0 object-cover absolute' src="/divar.svg" alt="" />  
                    </picture>
                </div>
            </div>
            <div className='w-[80%]'>
                <p className="text-[0.935rem] leading-[2] font-[500] overflow-hidden text-ellipsis whitespace-nowrap m-0 text-[rgba(0,0,0,.87)] ">
                    پستچی دیوار اهواز
                </p>
                <div className="flex items-center pt-[5px]">
                <p className="text-[0.935rem] leading-[2] font-[500] overflow-hidden text-ellipsis whitespace-nowrap m-0 text-[rgba(0,0,0,.87)] ">
                {!data ? <Skeleton  width={130} /> : data[0]["post"]}
                </p>
                </div>
            </div>
        </div>
        </div>
        <div className="flex flex-col-reverse  justify-between p-[2px_0_19px]">
        <div className="flex items-center justify-end">
        <p className="leading-[2] font-[500] text-[0.85rem] text-[rgba(0,0,0,.32)] m-[0_4px_0_0] text-left">
            {!data ? <Skeleton  width={60} /> : getDate(data[0]["date"])}
        </p>
        </div>
        </div>
    </div>
    <hr className='divider mt-1' />
</div></Link>
</SkeletonTheme>
  )
}

export default Postchi