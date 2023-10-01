import React, { useEffect, useState } from "react";
import HeaderOfAds from "../../Header/HeaderOfAds";
import { useParams, useNavigate, Link, useSearchParams} from "react-router-dom";
import Backdrop from "../../Backdrop/Backdrop";
const Chat = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [chatId, setChatId] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  let { id } = useParams();
  let chatIdQuery = searchParams.get('id')
  const token = localStorage.getItem("token") || null;
  const lsData = localStorage.getItem("data") || null;
  const getDate = (date) => {
    let correctDate;
    let nowDate = Date.now() / 1000;
    let exactDate = Math.ceil((nowDate - date) / 60);
    let unit = "لحظاتی ";
    if (exactDate > 4) {
      // exactDate = 0
      unit = "دقیقه";
    }

    if (exactDate > 1440) {
      exactDate = Math.round(exactDate / 1440);
      unit = "روز";
    }

    if (exactDate > 60) {
      exactDate = Math.round(exactDate / 60);
      unit = "ساعت";
    }

    correctDate =
      unit === "لحظاتی " ? unit + " پیش" : exactDate + " " + unit + " پیش";
    return correctDate;
  };
  useEffect(() => {
    const sendReq = async () => {
      try {
        const dummydata = [
          {
            "sender": "محمد محمدی",
            "receiver": "اکانت دمو",
              "sender_name": "محمد محمدی",
              "receiver_name": "اکانت دمو",
              "chatid": 0,
              "adid": 87,
              "date": 1696059640,
              "content": [{
                  "text": "سلام. تخفیف نمیدید؟",
                  "sender": "محمد محمدی", // user's uid goes here
                  "date": 1696098292
              }],
              "title": "ساینا دنده‌ای S، مدل ۱۴۰۱",
              "name": "محمد محمدی",
              "images": "ads/871.jpg"
          },
          {
              "sender_name": "علی علیپور",
              "receiver_name": "اکانت دمو",
              "chatid": 0,
              "adid": 89,
              "content": [
                {
                  "text": "سلام. رجیستر شده؟",
                  "sender": "علی علیپور", // user's uid goes here
                  "date": 1696059640
              },{
                  "text": "سلام نه. رجیستر هم نمیشه",
                  "sender": "اکانت دمو", // user's uid goes here
                  "date": 1696097112
              }
            ],
              "title": "اپل آیفون 14 پرو با حافظهٔ ۲۵۶ گیگابایت                    ",
              "name": "علی علیپور",
              "images": "ads/891.jpg"
          }
      ]
        if (dummydata) {
          setChatId(dummydata.chatid)
        }
        if (id) {
          dummydata.forEach((item) => {
            if (item.adid == id) {
              setData(item)
            }
          } )
         
        }
        // setData(dummydata);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };
    sendReq();
  }, [refresh]);



  const submitHandler = async () => {
    setIsLoading(true);
    try {
        setMessage("");
        setRefresh(!refresh)
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
  }
  return (
    <>
      {isLoading ? (
        <>
          <div className="flex fixed w-[100%] h-[100%] justify-center items-center">
            <img className="max-w-[200px]" src="/loading.svg" alt="" />
          </div>
        </>
      ) : (
        <>
        {error ? <Backdrop>
                        <div className="h-[100vh] fixed left-0 right-0 bg-gray-700 overflow-hidden">
                         <div className="flex flex-col h-[50vh] items-center justify-center text-[#fff] sm:text-[1.6rem] text-[1.2rem] overflow-hidden">
                           <div className="flex flex-col items-center justify-center underline">
                            {error}
                            <img
                              src="/static/images/wifi-off-svgrepo-com.svg"
                              alt="خطای اینترنت"
                            />
                            </div>
                         <button onClick={() => 
                         {
                            setError(null)
                            return navigate("/")
                         }} className="btn flex items-center justify-center md:p-[10px] p-[5px] mt-[15px] text-[#fff] text-[1.6rem] bg-[#4985ca] rounded-[10px] ">رفتن به صفحه اصلی </button>
                         </div>
                        </div>
                    </Backdrop> : ''}
          {data && <div className="wrapper flex justify-between flex-col">
          <HeaderOfAds showShare={false} nameInChat={data["sender_name"]} />
          <Link
            to={"/v/" + data["adid"]}
            className="shadow-[inset_0_-1px_0_rgba(0,0,0,.12)] items-center flex p-[8px_16px_8px_8px] bg-[#fafafa]"
          >
            <div className="w-[40px]">
              <picture className="h-[40px] rounded-[5px] block overflow-hidden relative w-[100%]">
                <img
                  className="block w-[100%] h-[100%] left-0 top-0 object-cover absolute"
                  src={
                    data["images"]
                      ? `/static/images/` +
                        data["images"]
                      : "/no-pic.svg"
                  }
                  alt=""
                />
              </picture>
            </div>
            <span className="leading-[2] text-[1rem] font-[500] text-[rgba(0,0,0,.87)] flex-1 m-[0_8px] text-right">
              {data["title"]}
            </span>
          </Link>
          <div className="flex flex-1 relative w-[100%] h-[100%] overflow-auto will-change-scroll">
            <div className="flex flex-col justify-between min-w-[100%] min-h-[100%]">
              <div className="mb-[60px]">
                <div className="p-[0_8px]">
                  <div className="flex justify-center pb-[16px]">
                    <div className="p-[0_8px] text-[0.75rem] min-h-[24px] border-solid border-[1px] border-transparent bg-[rgba(0,0,0,.04)] items-center rounded-[3px] text-[rgba(0,0,0,.56)] inline-flex font-[500] h-auto overflow-hidden leading-[2]">
                      <span className="m-0 overflow-hidden text-ellipsis whitespace-nowrap flex-1">
                        {data["content"] === null ? "هم اکنون": getDate(data["content"]["date"])}
                      </span>
                    </div>
                  </div>
                </div>
                {data.content?.map((item, i) => {
                  return <React.Fragment key={i}>
                <div className="p-[0_8px]">
                  <div>
                    <div className={`flex pb-[16px] ${item.sender === "اکانت دمو" ? 'justify-start' : 'justify-end'}`}>
                      <div className={`text-[0.935rem] font-[500] leading-[2] p-[8px_12px_4px] bg-[#f5f5f5] text-[rgba(0,0,0,.87)] max-w-[70%] whitespace-pre-line word-break ${token === item.sender ? ' rounded-[16px_16px_0px_16px]' : ' rounded-[16px_16px_16px_2px]'}`}>
                        <span>
                          {/* insert message's text here */}
                          
                          {item.text}
                        </span>
                        <div className="flex items-center mt-[2px]">
                          <div className="flex items-center text-[rgba(0,0,0,.32)] font-[500] leading-[3] text-[0.8rem]">
                            {getDate(item.date)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  </React.Fragment>
                })}


              </div>
                <div className="z-10 min-w-[100%] fixed bottom-0">
                  <div className="shadow-[0_-1px_2px_rgba(0,0,0,.12)] items-center bg-[#fff] flex p-[8px_0_8px_8px] relative">
                    <input type="text" onChange={(e) => setMessage(e.target.value)} value={message} placeholder="متنی بنویسید" className="py-[10px] text-[1rem] border-none rounded-[5px] text-[rgba(0,0,0,.87)] flex-1 m-[4px_24px_4px_0] outline-none p-0 overflow-visible" />
                    <button onClick={submitHandler} className="bg-[#a62626] mr-[8px] justify-center rounded-[50%] h-[3em] min-w-[auto] p-0 w-[3em] items-center border-solid border-transparent border-[1px] box-border text-[#fff] cursor-pointer inline-flex text-[1rem] font-[500] outline-none overflow-hidden relative">
                      <span>
                      <img src="/static/images/arrow-up-mark-svgrepo-com.svg" alt="ارسال" />
                      </span>
                    </button>
                  </div>
                </div>              
            </div>
          </div>
          </div>}
        </>
      )}
    </>
  );
};

export default Chat;
