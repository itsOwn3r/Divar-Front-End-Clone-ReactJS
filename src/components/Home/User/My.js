import React from 'react'
import Header from '../../Header/Header'
import Nav from '../../Nav/Nav'
import { Link, useNavigate } from 'react-router-dom'
import Footer from "../Footer"
const My = () => {
    const navigate = useNavigate()

    let userExist = false
    if (localStorage.getItem("token") && localStorage.getItem("phone") && document.cookie !== "") {
        userExist = true
    }
  return (
    <>
    <Header/>
    <div className='flex flex-col min-h-[80vh] pb-[82px]'>
    <div className="flex flex-1 flex-col justify-between p-[16px_16px_0]">
            {!userExist && <div>
            <div className="relative p-[16px_0] min-h-[auto] text-[rgba(0,0,0,.56)] flex text-[1rem] font-[500] justify-between leading-[2] whitespace-normal">
                <div className="flex items-start flex-1 min-w-0">
                    <p className='text-[rgba(0,0,0,.87)] leading-[2] text-[1rem] m-0 whitespace-pre-line'>برای استفاده از تمام امکانات دیوار اهواز وارد حساب خود شوید.</p>
                </div>
            </div>
            <Link to="/login"> <button className="flex bg-[#fff] border-none box-border w-[100%] items-center text-[rgba(0,0,0,.56)] cursor-pointer h-[48px] outline-none p-[0_16px]">
            <img className='ml-[8px] micon'
                              src="/static/images/login-svgrepo-com.svg"
                              alt="ورود"
                            />
                <p className="text-[0.85rem] font-[600] text-inherit leading-[2] m-0 overflow-hidden text-ellipsis whitespace-nowrap">
                    ورود به حساب کاربری
                </p>
            </button>
            </Link>
        </div>
            }
            {userExist && <div>
                <div className='p-[8px_16px_8px_10px]'>
                    <div className="flex items-center text-[rgba(0,0,0,.56)]">
                    <img className='ml-[8px] w-[20px] h-[20px]'
                              src="/static/images/user-rounded-svgrepo-com.svg"
                              alt="کاربر"
                            />
                        <div className='text-[0.935rem] font-[600] m-[0_8px_0_0] leading-[2] overflow-hidden text-ellipsis whitespace-nowrap'>کاربر دیوار</div>
                    </div>
                </div>
                <div className="m-0 text-[rgba(0,0,0,.5)] text-[0.85rem] font-[600] pr-[28px] leading-[2] overflow-hidden text-ellipsis whitespace-nowrap">
                    تلفن {localStorage.getItem("phone")}
                </div>
                <hr className='divider mt-2' />
                <Link to="/my/posts" className='items-center text-[rgba(0,0,0,.56)] cursor-pointer flex h-[48px] outline-none p-[0_16px] w-[100%]'>
                
                <img className='ml-[8px] micon' src="/static/images/archive-book-svgrepo-com.svg" alt="آگهی های من" />

                <p className='m-0 text-inherit font-[600] text-[0.95rem] leading-[2] overflow-hidden text-ellipsis whitespace-nowrap'>آگهی های من</p>
                </Link>
                <hr className='divider mt-2' />
                <button onClick={() => {
                    localStorage.clear()
                    document.cookie = "phone=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                return navigate("/");
                }} className='bg-[#fff] border-none box-border w-[100%] items-center text-[rgba(0,0,0,.56)] cursor-pointer flex h-[48px] outline-none p-[0_16px]' type='button'>
                    
                <img className='ml-[8px] micon' src="/static/images/logout-svgrepo-com.svg" alt="خروج" />
            
              <p className='text-inherit font-[600] text-[0.935rem] lading-[2] m-0 overflow-hidden text-ellipsis whitespace-nowrap'>
                  خروج از حساب
              </p>    
                </button>
            </div>}
    </div>
        <Footer />
    </div>
    <Nav />
    </>
  )
}

export default My