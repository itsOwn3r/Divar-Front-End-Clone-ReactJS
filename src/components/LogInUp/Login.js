import React, { useState } from 'react'
import Header from "../Header/Header";
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState(0)
  const [password, setPassword] = useState("")
  const [otp, setOtp] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState(null)
  const [userExist, setUserExist] = useState(null)


  const navigate = useNavigate()
  if (localStorage.getItem("token") && localStorage.getItem("phone") && document.cookie !== "") {
    return navigate("/my");
  }

  const submitHandler = async(e) => {
    e.preventDefault()
    if (phoneNumber.length !== 11) {
      setError("شماره اشتباه است! طول شماره باید 11 عدد باشد! حتما از اعداد انگلیسی استفاده کنید.")
    }

    if (isNaN(phoneNumber) || isNaN(otp)) {
      setError("خطا! فقط عدد وارد کنید.")
    }

    if (phoneNumber.length === 11 && !isNaN(phoneNumber) && phoneNumber.startsWith('09')) {
      const nowDate = Math.ceil(Date.now() / 1000)
      setError(null)
      let fetchUrl = "https://xyz.xyz/"
      let dataToSend = {
        phoneNumber : phoneNumber
      };
      if (userExist === true) {
        fetchUrl = fetchUrl + "?type=login"
        dataToSend = {
          phoneNumber : phoneNumber,
          passWord: password
        }
      }

      if (userExist === false) {
        fetchUrl = fetchUrl + "?type=signup"
        dataToSend = {
          phoneNumber : phoneNumber,
          otp: otp,
          name: name,
          passWord: password,
          date: nowDate
        }
      }

      if (fetchUrl.includes("signup")) {
        if(error?.includes("دقیقه دیگر تلاش کنید")){
          return;
        }
        if (!password) {
          if (password.length <= 7) {
            setError("رمز باید حداقل 8 کاراکتر باشد.") 
            return;
          }
        }

        if (!otp) {
          if (otp.length <= 3) {
            setError("رمز یکبار مصرف شامل 4 عدد است.") 
            return;
          }
        }

        if (!name) {
          if (name.length <= 2) {
            setError("نام باید حداقل شامل 2 کاراکتر باشد.")
            return;
          }
        }
        
      }
      const res = await fetch(fetchUrl, {
        method: "POST",
        body: JSON.stringify(dataToSend)
      })
      const response = await res.json()
      setError(null)
      if (response.error) {
        setUserExist(null)
        fetchUrl = "https://xyz.xyz"
      }
      if (response.exist === true) {
        setUserExist(true)
      }
      if (response.exist === false) {
        setUserExist(false)
      }

      if ((response.loggedIn && response.loggedIn === true) || response.signedUp === true) {
                   return navigate("/my");
       }
      if (response.error) {
        setError(response.error)
      }
    }

  }


  return (
    <>

    <Header/>
    <div className='flex flex-auto flex-col overflow-y-auto'>
        <div className="relative mn-[4rem] overflow-y-auto pt-[8px] scroll-smooth flex-grow p-[16px_16px_0]">
            <div className="flex flex-col pt-[16px]">
                <p className="font-[700] text-[1.2rem] leading-[2] my-[16px]">شمارهٔ موبایل خود را وارد کنید</p>
                <p className="font-[500] text-[1rem] leading-[2] whitespace-pre-line my-[14px]">برای استفاده از امکانات دیوار اهواز، لطفاً شمارهٔ موبایل خود را وارد کنید. کد تأیید به این شماره پیامک خواهد شد. </p>
            <form onSubmit={submitHandler}>
                {error ? <p className='text-[1rem] font-[600] text-center my-[15px]'>{error}</p> : ''}
                <div className="w-[100%] relative h-[2.5rem] flex justify-center items-center">
                    <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber ? phoneNumber : ''} type='tel' name='mobile' inputMode='numeric' autoComplete='tel' placeholder='09171234567' className='pl-[58px] ltr pr-[16px] h-[2.5rem] leading-[2.5rem] absolute bg-[#fff] rounded-[5px] box-border text-[rgba(0,0,0,.87)] text-[1rem] outline-0 w-[100%] border-[rgba(0,0,0,.24)] border-solid border-[1px] md:w-[65%]' />
                </div>
          {(!error?.includes("دقیقه دیگر تلاش کنید")) ?
           <>

             {userExist === false & (error !== "در ارسال پیامک مشکلی به وجود آمد :(")  ? <div className="fadeInOut w-[100%] mt-[30px] relative h-[2.5rem] flex justify-center items-center">
                    <input onChange={(e) => setOtp(e.target.value)} value={otp ? otp : ''} type="text" name='otp' autoComplete='off' placeholder='کد دریافتی از طریق پیامک را وارد کنید' className='pl-[58px] ltr pr-[16px] h-[2.5rem] leading-[2.5rem] absolute bg-[#fff] rounded-[5px] box-border text-[rgba(0,0,0,.87)] text-[1rem] text-center outline-0 w-[100%] border-[rgba(0,0,0,.24)] border-solid border-[1px] md:w-[65%]' />
                </div> : ''}
                
                {userExist === false & (error !== "در ارسال پیامک مشکلی به وجود آمد :(")  ? <div className="fadeInOut w-[100%] mt-[30px] relative h-[2.5rem] flex justify-center items-center">
                    <input onChange={(e) => setName(e.target.value)} value={name ? name : ''} type="text" name='name' placeholder='نام شما (برای قسمت چت)' className='pl-[58px] ltr pr-[16px] h-[2.5rem] leading-[2.5rem] absolute bg-[#fff] rounded-[5px] box-border text-[rgba(0,0,0,.87)] text-[1rem] text-center outline-0 w-[100%] border-[rgba(0,0,0,.24)] border-solid border-[1px] md:w-[65%]' />
                </div> : ''}

                {userExist === false & (error !== "در ارسال پیامک مشکلی به وجود آمد :(")  ? <div className="fadeInOut w-[100%] mt-[30px] relative h-[2.5rem] flex justify-center items-center">
                    <input onChange={(e) => setPassword(e.target.value)} value={password ? password : ''} type="password" name='password' placeholder='رمز عبور (حداقل 8 حرف انگلیسی)' className='pl-[58px] ltr pr-[16px] h-[2.5rem] leading-[2.5rem] absolute bg-[#fff] rounded-[5px] box-border text-[rgba(0,0,0,.87)] text-[1rem] text-center outline-0 w-[100%] border-[rgba(0,0,0,.24)] border-solid border-[1px] md:w-[65%]' />
                </div> : ''}

                {userExist && <div className="w-[100%] mt-[30px] relative h-[2.5rem] flex justify-center items-center">
                    <input onChange={(e) => setPassword(e.target.value)} value={password ? password : ''} type="password" name='password' autoComplete='off' placeholder='رمز عبور را وارد کنید' className='pl-[58px] ltr pr-[16px] h-[2.5rem] leading-[2.5rem] absolute bg-[#fff] rounded-[5px] box-border text-[rgba(0,0,0,.87)] text-[1rem] text-center outline-0 w-[100%] border-[rgba(0,0,0,.24)] border-solid border-[1px] md:w-[65%]' />
                </div>}</> : ''}

            </form>
            </div>
        </div>
        <footer className='bottom-0 w-[100%] absolute p-[12px_8px] shadow-[0_-1px_2px_0_rgba(0,0,0,.12)] pb-[16px] items-center bg-[#fff] flex flex-wrap justify-end mt-[auto] z-10'>
          <div className="flex flex-grow m-[0_8px] justify-end">
            <button onClick={submitHandler} className="inline-flex basis-6/12 bg-[#a62626] flex-1 items-center border-[1px] border-solid border-transparent rounded-[5px] text-[#fff] cursor-pointer text-[1rem] text-[500] h-[2.5rem] justify-center leading-[normal] min-w-[6rem] outline-none overflow-hidden p-[0_16px] relative">
              <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                  تایید
              </span>
            </button>
          </div>
        </footer>
    </div>
    {/* <Nav/> */}
    </>
  )
}

export default Login