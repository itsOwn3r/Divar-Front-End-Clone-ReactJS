import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="flex items-center flex-col mt-[64px] py-[16px] text-[0.7rem] leading-[2] ">
    <Link to='/' className='text-[rgba(0,0,0,.72)] text-[1rem] text-[orange] p-[7px] border-solid border-[1px] border-[#c9c9c9] rounded-[12px]'>
        دیوار اهواز
    </Link>
    <div className='flex items-center mt-[20px]'>
    <p>لینک ها:</p>

        <Link to="/" className='mx-[8px] text-[orange]'>
            صفحه اصلی
        </Link>
        
        <a href='https://t.me/' target='_blank' rel="noreferrer" className='mx-[8px] text-[orange]'>کانال تلگرام</a>
       
        <a href='https://own3r.me' target='_blank' rel="noreferrer" className='mx-[8px] text-[orange]'>برنامه نویس: </a>

    </div>
</footer>
  )
}

export default Footer