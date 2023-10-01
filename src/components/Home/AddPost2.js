import React, { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import HeaderOfAds from "../Header/HeaderOfAds";
import Backdrop from "../Backdrop/Backdrop"
let allArr = []
const AddPost = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [isChatDisabled, setIsChatDisabled] = useState(false)
  const [previewImg, setPreviewImg] = useState([{
    img: "",
    imgName: ""
  }])
  let { post } = useParams();
  const userIsLoggedIn = document.cookie.includes("token") && document.cookie.includes("phone") && localStorage.getItem("phone") !== null
  useEffect(() => {
    if (!userIsLoggedIn) {
    return navigate("/login")
  }
  }, [])
  
  let postType;
  switch (post) {
    case "estate":
      postType = "املاک";
      break;

    case "car":
      postType = "وسایل نقلیه";
      break;

    case "digital":
      postType = " کالای دیجیتال (موبایل، لپتاپ، کامپیوتر و...) ";
      break;

    case "food":
      postType = "خوردنی و آشامیدنی";
      break;

    case "home":
      postType = "وسایل خانه و آشپزخانه";
      break;

    case "services":
      postType = "خدمات";
      break;

    case "personal":
      postType = "وسایل شخصی";
      break;

    case "tools":
      postType = "تجهیزات";
      break;

    case "other":
      postType = "متفرقه";
      break;

    default:
      break;
  }


  const inputHandler = async (e) => {
    if (e.type === "change") {
      // const fileInput = e.target
      const fileInput = document.querySelector('#input')
      let files = fileInput.files

      let filesLength = files.length;
      if (filesLength > 10) {
        filesLength = 10
      }
    for (let i = 0; i < filesLength; i++) {
      let file = files[i];
      if (allArr.length >= 10) {
        break;
      }
      allArr.push({
        img:file,
      imgName: file.name || null
    })
  }
  setPreviewImg([...allArr])
}
if (e.type === "submit") {
  let formData = new FormData();
  previewImg.forEach(x=>  formData.append('files[]', x.img))
  e.preventDefault()

  const dataToSend = {
    title: title,
    description: description,
    price: price,
    // img: fileInput ? fileInput.files : null,
    cat: post,
    cat_name: postType,
    disabled_chat: isChatDisabled
  }
  formData.append('jsonData', JSON.stringify(dataToSend))

    // setError("This is a static version. Sending post is not supported.")
    setSuccess("آگهی ارسال شد. (مثلا)")
    setError("")
    setTitle("")
    setDescription("")
    setPrice("")
    setPreviewImg([{
      img: "",
      imgName: ""
    }])

  }
  }
  return (
    <>
      <HeaderOfAds />
      <div className="overflow-hidden">
        <div className="pb-[16px] bg-[#fff] ">
          <div className="w-[100%] mx-[auto]  max-w-[768px] px-[16px]">
            <div className="flex flex-wrap mx-[-8px]">
              <div className="pt-[16px] px-[8px] relative w-[100%]">
              {error &&       <Backdrop>
        <div className='flex items-center justify-center text-[1.2rem] h-[100%] flex-col bg-black'>
       <span className="text-[white] underline"> {error}</span>
        
      <button className='mt-[30px] cursor-pointer bg-[#146ba9] p-[15px] rounded-[10px] text-[#fff] text-[1rem] hover:bg-[#477697] hover:text-[#ecb7b7]' onClick={() => navigate("/my")}>ورود به مدیریت حساب کاربری</button>
        </div>
      </Backdrop>}

              {success &&       <Backdrop>
        <div className='flex items-center justify-center text-[1.2rem] h-[100%] flex-col bg-black'>
       <span className="text-[white]"> {success.message}</span>
        
      <button className='mt-[30px] cursor-pointer bg-[#146ba9] p-[15px] rounded-[10px] text-[#fff] text-[1rem] hover:bg-[#477697] hover:text-[#ecb7b7]' onClick={() => navigate("/")}> رفتن به صفحه اصلی </button>
        </div>
      </Backdrop>}

                <h1 className="m-0 text-[1rem] text-[#303030] font-[600] leading-[1.5] p-[16px_0_0_0]">
                  ثبت آگهی در دسته {postType}
                </h1>
                <hr className='divider mt-1' />
                <div className="min-h-[90px] relative">
                  <div className="text-[0.935rem]">
                    <form onSubmit={inputHandler}  className="flex flex-col text-right" id="form">
                      <div className="w-[100%] mt-[16px]">
                        <div>
                          <div className="m-0 border-none flex flex-col min-w-[0] p-0">
                          <div className="w-[100%] mt-[16px]">
                              <div className="flex text-[rgba(0,0,0,.87)] pb-0 text-[1rem] font-[600] leading-[2]">
                              عنوان آگهی
                              </div>
                            <div className="text-[0.8rem] font-[400] leading-[2] m-[8px_0] text-[rgba(0,0,0,.56)] whitespace-pre-wrap">
                              عنوان آگهی مد نظر خود را وارد کنید.
                            </div>
                            <div>
                              <div className="relative h-[2.5rem] w-[100%]">
                              <input type="text" required placeholder="عنوان آگهی؟" onChange={e => setTitle(e.target.value)} className="px-[16px] h-[2.5rem] leading-[2.5rem] absolute bg-[#fff] border-solid border-[1px] border-[rgba(0,0,0,.24)] rounded-[5px] box-border text-[rgba(0,0,0,.87)] text-[1rem] outline-none w-[100%]" value={title} autoComplete="off"/>
                              </div>
                            </div>
                            </div>


                            <div className="w-[100%] mt-[16px]">
                              <div className="flex text-[rgba(0,0,0,.87)] pb-0 text-[1rem] font-[600] leading-[2]">
                               قیمت
                              </div>
                            <div>
                              <div className="relative h-[2.5rem] w-[100%]">
                              <input type="number" onChange={e => setPrice(e.target.value)} value={price !== 0 ? price : ""} placeholder="قیمت به تومان (در صورت خالی بودن، توافقی خواهد بود)" className="px-[16px] h-[2.5rem] leading-[2.5rem] absolute bg-[#fff] border-solid border-[1px] border-[rgba(0,0,0,.24)] rounded-[5px] box-border text-[rgba(0,0,0,.87)] text-[1rem] outline-none w-[100%]" />
                              </div>
                            </div>
                            </div>

                            <div className="w-[100%] mt-[16px]">
                            <div className="flex text-[rgba(0,0,0,.87)] pb-0 text-[1rem] font-[600] leading-[2] pt-[26px]">
                              توضیحات آگهی
                              </div>
                              <div className="text-[0.8rem] font-[400] leading-[2] m-[8px_0] text-[rgba(0,0,0,.56)] whitespace-pre-wrap">
                              جزئیات و نکات جالب توجه آگهی خود را کامل و دقیق بنویسید. 
                            </div>
                            <div>
                              <div className="bg-[#fff] block overflow-hidden relative">
                             <textarea onChange={e => setDescription(e.target.value)} value={description} className="bg-none resize-y  border-solid border-[1px] border-[rgba(0,0,0,.24)] rounded-[5px] box-border text-[rgba(0,0,0,.87)] block text-[1rem] font-[400] leading-[2] min-h-[7.5rem] outline-none p-[8px_16px] w-[100%]" type="text" required></textarea>
                              </div>
                            </div>
                            <p className="mt-[15px]">
                              <input type="checkbox" className="ml-[5px]" onChange={() => setIsChatDisabled(!isChatDisabled)} />
                               چت غیرفعال شود؟
                            </p>
                            </div>

                            <div className="w-[100%] mt-[16px]">
                              <div>
                                <div className="flex mt-[5px] flex-col">
                                  <div className="mb-0 text-[rgba(0,0,0,.87)] flex text-[1rem] font-[600] leading-[2] pt-[16px]">
                                    عکس آگهی
                                  </div>
                                  <div className="text-[rgba(0,0,0,.56)] m-[8px_0]  whitespace-pre-wrap font-[500] text-[0.85rem] leading-[2]">
                                  با افزودن عکس‌های پیشنهادی کیفیت آگهی‌ و در نتیجهٔ آن بازدید را تا ۳ برابر افزایش دهید.
                                  </div>
                                            <div className="gridhandler">
                                                <div className="relative cursor-pointer inline-block  w-[98px] h-[98px]">
                                                    <input id="input" onChange={e => {
                                                      inputHandler(e)
                                                      // document.querySelector("#input").addEventListener("change", inputHandler, false)
                                                      // document.querySelector("#input").addEventListener("click", inputHandler, false)
                                                      }} className="w-[100px] h-[7em] z-50 relative opacity-0 cursor-pointer" accept="image/jpeg,image/png" multiple max="10" type="file" autoComplete="off"  name="files[]"/>
                                                    <img className="absolute top-0" src="/download1.png" width={98} height={98} alt="" />
                                                </div>
                                                {previewImg && previewImg.map((img, i) =>
                                                <React.Fragment key={i}>
                                                
         {img.img !== "" ?
          <div className="relative cursor-pointer inline-flex w-[98px] h-[98px] items-center justify-center border-dashed border-[1px] border-black ">
         <img className="absolute top-0 picHolder" src={URL.createObjectURL(img.img)} width="98px" height="98px" alt="" />
         <div className="absolute right-[1%] top-0 rounded-[50%] h-[20px] w-[20px] text-[0.85rem] text-right">
         <img className="remove" onClick={()=> {
          setPreviewImg(previewImg.filter(item => item.img !== img.img))
          allArr = allArr.filter(item => item.img !== img.img)
         }} src="/remove.png" alt="حذف؟" />
         {/* <img className="remove" onClick={(e)=> console.log(previewImg.filter(item => item.img !== img.img))} src="/remove.png" alt="حذف؟" /> */}
         {/* {previewImg} */}
         </div>
         </div> : "" }
         </React.Fragment>
         )}

                                                
                                                
                                            </div>
                                  <div></div>
                                </div>
                              </div>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end pt-[32px]">
                        <button onClick={() => navigate("/")} className="inline-flex bg-none outline-none border-none cursor-pointer flex-1 text-[rgba(0,0,0,.56)] items-center rounded-[5px] box-border text-[1rem] font-[500] h-[2.5rem] justify-center leading-normal overflow-hidden relative p-[0_16px]">
                          <span className="overflow-hidden text-ellipsis whitespace-nowrap">انصراف</span>
                        </button>

                        <button className="inline-flex bg-[#a62626] text-[#fff] mr-[16px] md:flex-1 bg-none outline-none border-none cursor-pointer flex-1 items-center rounded-[5px] box-border text-[1rem] font-[500] h-[2.5rem] justify-center leading-normal overflow-hidden relative p-[0_16px]">
                          <span className="overflow-hidden text-ellipsis whitespace-nowrap">ارسال آگهی</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;
