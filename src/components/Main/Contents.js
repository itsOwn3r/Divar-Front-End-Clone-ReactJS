import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Backdrop from '../Backdrop/Backdrop'
import {useNavigate, useResolvedPath } from 'react-router-dom'
const Contents = ({name, price, date, images, ad_id, type, myPosts}) => {
    let match = useResolvedPath("").pathname
    let isInMyPosts = match.includes("/my/posts")
    const [response, setResponse] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate()
    let correctDate;
    if (date) {
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
    }
    const removeHandler = (e) =>{
        e.preventDefault()
        let con =  window.confirm("آیا از حذف این آگهی اطمینان دارید؟")
        if (con) {
            const req = async () => {
                try {                   
                setResponse("آگهی پاک شد!")
        } catch (error) {
            console.error(error)
            if (error.message === "Failed to fetch") {
                setResponse("خطای ارتباط با اینترنت")
            } else {
                setResponse(error.message)
            }
        }
        }
        req()
        }
    }
  return (
    <SkeletonTheme baseColor="#4c4c4c" highlightColor="#626262" inline="true" duration={"3"} height={30} borderRadius={"1rem"}>
                                {response ? <Backdrop>
                        <div className="h-[100vh] fixed left-0 right-0 bg-gray-700 overflow-hidden">
                         <div className="flex flex-col h-[50vh] items-center justify-center text-[#fff] text-[1.6rem] overflow-hidden">
                           <div className="flex items-center justify-center underline">
                            {response}

                            </div>
                         <button onClick={() => 
                         {
                            setResponse(null)
                            setRefresh(!refresh)
                            return navigate("/");
                         }} className="btn flex items-center justify-center p-[10px] mt-[15px] text-[#fff] text-[1.6rem] bg-[#4985ca] rounded-[10px] ">رفتن به صفحه اصلی </button>
                         </div>
                        </div>
                    </Backdrop> : ''}<div className={type === "dummy" ? 'h-[184px] sm:max-w-[50%] max-w-[100%] relative w-[100%] p-[8px] dummy' : 'h-[184px] sm:max-w-[50%] max-w-[100%] relative w-[100%] p-[8px]'}>
                        <Link to={`/v/${ad_id}`}>
                            <article className='mb-[16px] flex flex-col rounded-[5px] h-[168px] p-[16px] relative bg-[#fff] border-solid border-[1px] border-[#80808069]'>
                                <div className='flex' adid={ad_id}>
                                    <div className='flex flex-col flex-grow min-w-0 relative'>
                                        <h2 className='font-[500] text-[1rem] text-[rgba(0,0,0,.87)] h-[56px] leading-[28px] mb-auto mt-0 overflow-hidden break-words'> {name || <Skeleton  width={160} />} </h2>
                                        <div className="description">
                                        {isNaN(price) && <Skeleton  width={90} />}
                                            {(price > 0) ? price.toLocaleString() : ""} 
                                            {price === 0 ? "توافقی" : ""} 
                                             {price ? ' تومان' : "" }
                                        </div>
                                        <div className="flex items-center leading-[24px] break-words whitespace-nowrap">
                                            <span className='text-[rgba(0,0,0,.56)] text-[0.75rem] overflow-hidden text-ellipsis whitespace-nowrap'> {correctDate || <Skeleton  width={90} />}</span>
                                        </div>
                                    </div>
                                    <div onClick={isInMyPosts ? removeHandler : undefined} className='text-[rgba(0,0,0,.56)] flex flex-col justify-end'>
                                    {myPosts ? <img src='/remove.png' className='w-[25px] h-[25px]' alt='حذف این آگهی؟' /> :                               <img
                              src="/static/images/chat-svgrepo-com2.svg"
                              alt="چت"
                            />}
                                    </div>
                                    <div className='imgInSmallDevices bg-[#f5f5f5] rounded-[4px] flex-[0_0_136px] h-[136px] mr-[5px] overflow-hidden w-[136px]'>
                                            <picture className='pb-[100%] rounded-[4px] block overflow-hidden relative w-[100%]'>
                                                <img className='object-cover block h-[100%] left-0 top-0 absolute w-[100%]' src={(images !== undefined && images.length > 0) ? `/static/images/ads/${images[0]}` : '/no-pic.svg' }  alt={name} />
                                                 {images === undefined && <Skeleton height={130} />}
                                            </picture>
                                    </div>
                                </div>
                            </article>
                        </Link>
</div>
</SkeletonTheme>
  )
}

export default Contents