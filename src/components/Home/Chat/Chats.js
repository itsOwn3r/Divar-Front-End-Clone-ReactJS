import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import Nav from '../../Nav/Nav'
import { Link } from 'react-router-dom'
import Postchi from './Postchi'
const Chats = () => {
    const [ data, setData ] = useState(null)
    const token = localStorage.getItem("token") || null
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
            const dummydata = [
                {
                    "sender_name": "محمد محمدی",
                    "receiver_name": "اکانت دمو",
                    "chatid": 0,
                    "adid": 87,
                    "content": {
                        "text": "سلام. تخفیف نمیدید؟",
                        "sender": "محمد محمدی", // user's uid goes here
                        "date": 1696098292
                    },
                    "title": "ساینا دنده‌ای S، مدل ۱۴۰۱",
                    "name": "محمد محمدی",
                    "images": "ads/871.jpg"
                },
                {
                    "sender_name": "علی علیپور",
                    "receiver_name": "اکانت دمو",
                    "chatid": 0,
                    "adid": 89,
                    "content": {
                        "text": "سلام نه. رجیستر هم نمیشه",
                        "sender": "علی علیپور", // user's uid goes here
                        "date": 1696097112
                    },
                    "title": "اپل آیفون 14 پرو با حافظهٔ ۲۵۶ گیگابایت                    ",
                    "name": "علی علیپور",
                    "images": "ads/891.jpg"
                }
            ]
        setData(dummydata)
    }
    sendReq()
},[])


  return (
    <>
        <Header />
        <div className="relative h-[100%] block">
            <div className='px-[16px] w-[100%]'>
                <div className="relative flex w-[100%] h-[100%]">
                    <div className="w-[100%] overflow-hidden">
                        <div className="h-[97%]">
                        <div className="flex relative h-[100%] w-[100%] will-change-scroll">
                        <div className="flex flex-col min-w-[100%] h-[100%] items-center justify-center">
                            <div className='container mb-[35px]'>
                              {/* postchi start */}
                                <Postchi />
                              {/* postchi end */}

                                {data?.map((item, index) => {
                                  return  <Link to={"/chat/" + item.adid + `?id=${item.chatid}`} key={index}><div className='pt-[16px] bg-[rgba(240,250,255,.24)] cursor-pointer block'>
                                    <div className="flex">
                                        <div className='flex-1 w-[70%]'>
                                        <div className="">
                                        <p className="text-[0.935rem] leading-[2] font-[500] overflow-hidden text-ellipsis whitespace-nowrap m-0 text-[rgba(0,0,0,.87)] ">
                                                      {item.sender === token ? item.receiver_name : item.sender_name}
                                                </p>
                                                <div className="flex items-center mt-[5px]">
                                             <p className='leading-[2] text-[0.85rem] font-[500] overflow-hidden text-ellipsis whitespace-nowrap text-[rgba(0,0,0,.87)] flex-1 m-0'> {item.content.text} </p>  
                                                </div>
                                            </div>
                                        <div className="flex items-center m-[12px_0_8px]">
                                            <div className="relative ml-[8px]">
                                            <div className="w-[48px] h-[48px]">
                                                    <picture className="mb-[100%] h-[100%] rounded-[5px] block overflow-hidden relative w-[100%]">
                                                      <img className='block w-[100%] h-[100%] left-0 top-0 object-cover absolute' src={item.images ? `/static/images/${item.images}` : `/no-pic.svg`} alt={item.title} />  
                                                    </picture>
                                                </div>
                                            </div>
                                            <p className='leading-[2] text-[0.85rem] font-[500] overflow-hidden text-ellipsis whitespace-nowrap text-[rgba(0,0,0,.87)] flex-1 m-0'>
                                               {item.title}
                                            </p>
                                        </div>
                                        </div>
                                        <div className="flex flex-col-reverse  justify-between p-[2px_0_19px]">
                                        <div className="flex items-center justify-end">
                                        <p className="leading-[2] font-[600] text-[0.93rem] text-[rgba(0,0,0,.32)] m-[0_4px_0_0] text-left">
                                        {getDate(item.content.date)}
                                        </p>
                                        </div>
                                        </div>
                                    </div>
                                    <hr className='divider mt-1' />
                                </div></Link>
                                })}

                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Nav />
    </>
  )
}

export default Chats