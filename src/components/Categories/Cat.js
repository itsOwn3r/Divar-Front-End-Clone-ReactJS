import React, { useState } from 'react'
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import {useNavigate, Link} from 'react-router-dom'
const Cat = ({type}) => {
    const [display, setDisplay] = useState(true)
    const navigate = useNavigate()
    const hideHandler = () => {
        setDisplay(!display)
        return navigate(-1);
    }
  return (
    <>
    <Header />
    <Nav display={display} setDisplay={setDisplay} />
    {display && <div className="fixed left-0 h-[100vh] top-0 w-[100vw] z-[52] bg-[rgba(0,0,0,.48)]">
        <div className="flex items-center flex-col h-[100%] justify-center left-0 fixed top-0 w-[100%]">
            <div className="m-[0] rounded-none h-[100%] w-[100%] bg-[#fff] flex flex-col max-h-[100%] max-w-[100%] overflow-hidden relative shadow-[0_8px_48px_8px_rgba(0,0,0,.04),_0_12px_16px_-8px_rgba(0,0,0,.12),_0_24px_32px_4px_rgba(0,0,0,.08)]">
                <header className='p-[32px] relative z-10 shadow-[0_1px_2px_0_rgba(0,0,0,.12)]'>
                        <div className="flex items-center m-[-6px]">
                            <div className='flex-grow m-[0_6px_0_8px] text-[rgba(0,0,0,.87)] text-[1.325rem] font-[500] leading-[1.5]'>
                            <div className="flex items-center">
                            انتخاب دسته بندی
                            </div>
                            </div>
                            <button className='rounded-[50%] h-[2.5rem] w-[2.5rem] min-w-[auto] p-0 bg-transparent text-[rgba(0,0,0,.56)] inline-flex items-center border-solid border-[1px] border-transparent box-border cursor-pointer text-[1.8rem] font-[800] justify-center leading-normal outline-none overflow-hidden relative' onClick={hideHandler}>X</button>
                        </div>
                </header>
                <div className="flex flex-auto flex-col overflow-y-auto">
                    <div className="flex-grow overflow-y-auto pt-[8px] relative scroll-smooth p-[16px_16px_0] sm:p-[32px_32px_0] ">
                        <div className='pb-[72px]'>
                            <div className='cursor-pointer border-none outline-none'>
                            <Link to={type ? "/add/estate" : "/cat/estate"} className='text-[rgba(0,0,0,.56)] flex text-[1.2rem] font-[600] justify-between leading-[2] min-h-[48px] p-[8px] whitespace-normal border-b-[1px] border-b-solid border-b-[rgba(0,0,0,.12)]'> املاک <label className="text-[16px] font-[700]">  &gt; </label> </Link>
                            <Link to={type ? "/add/car" : "/cat/car"} className='text-[rgba(0,0,0,.56)] flex text-[1.2rem] font-[600] justify-between leading-[2] min-h-[48px] p-[8px] whitespace-normal border-b-[1px] border-b-solid border-b-[rgba(0,0,0,.12)]'> وسایل نقلیه <label className="text-[16px] font-[700]">  &gt; </label> </Link>
                            <Link to={type ? "/add/digital" : "/cat/digital"} className='text-[rgba(0,0,0,.56)] flex text-[1.2rem] font-[600] justify-between leading-[2] min-h-[48px] p-[8px] whitespace-normal border-b-[1px] border-b-solid border-b-[rgba(0,0,0,.12)]'> کالای دیجیتال (موبایل، لپتاپ، کامپیوتر و...)  <label className="text-[16px] font-[700]">  &gt; </label> </Link>
                            <Link to={type ? "/add/food" : "/cat/food"} className='text-[rgba(0,0,0,.56)] flex text-[1.2rem] font-[600] justify-between leading-[2] min-h-[48px] p-[8px] whitespace-normal border-b-[1px] border-b-solid border-b-[rgba(0,0,0,.12)]'> خوردنی و آشامیدنی <label className="text-[16px] font-[700]">  &gt; </label> </Link>
                            <Link to={type ? "/add/home" : "/cat/home"} className='text-[rgba(0,0,0,.56)] flex text-[1.2rem] font-[600] justify-between leading-[2] min-h-[48px] p-[8px] whitespace-normal border-b-[1px] border-b-solid border-b-[rgba(0,0,0,.12)]'>وسایل  خانه و آشپزخانه <label className="text-[16px] font-[700]">  &gt; </label> </Link>
                            <Link to={type ? "/add/services" : "/cat/services"} className='text-[rgba(0,0,0,.56)] flex text-[1.2rem] font-[600] justify-between leading-[2] min-h-[48px] p-[8px] whitespace-normal border-b-[1px] border-b-solid border-b-[rgba(0,0,0,.12)]'> خدمات <label className="text-[16px] font-[700]">  &gt; </label> </Link>
                            <Link to={type ? "/add/personal" : "/cat/personal"} className='text-[rgba(0,0,0,.56)] flex text-[1.2rem] font-[600] justify-between leading-[2] min-h-[48px] p-[8px] whitespace-normal border-b-[1px] border-b-solid border-b-[rgba(0,0,0,.12)]'> وسایل شخصی <label className="text-[16px] font-[700]">  &gt; </label> </Link>
                            <Link to={type ? "/add/tools" : "/cat/tools"} className='text-[rgba(0,0,0,.56)] flex text-[1.2rem] font-[600] justify-between leading-[2] min-h-[48px] p-[8px] whitespace-normal border-b-[1px] border-b-solid border-b-[rgba(0,0,0,.12)]'> تجهیزات <label className="text-[16px] font-[700]">  &gt; </label> </Link>
                            <Link to={type ? "/add/other" : "/cat/other"} className='text-[rgba(0,0,0,.56)] flex text-[1.2rem] font-[600] justify-between leading-[2] min-h-[48px] p-[8px] whitespace-normal border-b-[1px] border-b-solid border-b-[rgba(0,0,0,.12)]'> متفرقه <label className="text-[16px] font-[700]">  &gt; </label> </Link>
                           
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        
    </div>
    }
  </>
  )
}

export default Cat