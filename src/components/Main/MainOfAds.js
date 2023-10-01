import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Backdrop from "../Backdrop/Backdrop";
import { Link, useParams } from "react-router-dom";
import Footer from "../Home/Footer";
import { data as DUMMYDATA } from "./DUMMYDATA";
const MainOfAds = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);
  const [imgs, setimgs] = useState([]);
  const [error, setError] = useState(null);
  const [date, setDate] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [userPhone, setUserPhone] = useState(null);
  useEffect(() => {
    const req = async () => {
      try {
         let exactDate;
        DUMMYDATA.forEach(ad => {
        if (ad.id == id) {
        setData(ad);
        setimgs(ad["images"].reverse());
      }
        
        if (ad["user"]) {
          setUserPhone(ad["user"]);
        }
        let nowDate = Date.now() / 1000;
        exactDate = Math.ceil((nowDate - ad.date) / 60);
});
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
        setDate(
          unit === "لحظاتی " ? unit + " پیش" : exactDate + " " + unit + " پیش"
        );
      } catch (error) {
        console.error(error);
        if (error.message === "Failed to fetch") {
          setError("خطای ارتباط با اینترنت");
        } else {
          setError(error.message);
        }
      }
    };
    req();
  }, [refresh, id]);
  if (data) {
    document.title = `${data.title + " - دیوار اهواز"}`;
  }
  const [picUrl, setPicUrl] = useState(null);
  const showSinglePic = () => {
    setPicUrl(null);
  };

  const shareHandler = () => {
    if (navigator.share) {
      const title = document.querySelector("#title").innerText;
      navigator.share({
        title: title,
        text: `آگهی ${title} را در دیوار اهواز مشاهده کنید.`,
        url: window.location.href,
      });
    }
  };

  return (
    <SkeletonTheme
      baseColor="#4c4c4c"
      highlightColor="#626262"
      inline="true"
      duration={"3"}
      height={30}
      borderRadius={"1rem"}
    >
      {error ? (
        <Backdrop>
          <div className="h-[100vh] fixed left-0 right-0 bg-gray-700 overflow-hidden">
            <div className="flex flex-col h-[50vh] items-center justify-center text-[#fff] text-[1.6rem] overflow-hidden">
              <div className="flex items-center justify-center underline">
                {error}
                <img
                  src="/static/images/wifi-off-svgrepo-com.svg"
                  alt="خطای اینترنت"
                />
              </div>
              <button
                onClick={() => {
                  setError(null);
                  setRefresh(!refresh);
                }}
                className="btn flex items-center justify-center p-[10px] mt-[15px] text-[#fff] text-[1.6rem] bg-[#4985ca] rounded-[10px] "
              >
                تلاش مجدد
              </button>
            </div>
          </div>
        </Backdrop>
      ) : (
        ""
      )}
      <div className="fixed bottom-0 left-0 p-[12px_16px] w-[100%] bg-[rgba(255,255,255,.98)] shadow-[0_-1px_2px_0_rgba(0,0,0,.12)] z-[55] pt-[12px]">
        {!error && (
          <div className="flex justify-end">
           
              <>

                  <Link
                    to={`/chat/${data && data.id}`}
                    className="flex-1 inline-flex ml-[10px] box-border bg-[#a62626] items-center rounded-[5px] text-[#fff] cursor-pointer text-[1rem] font-[500] h-[2.5rem] justify-center leading-normal outline-none overflow-hidden px-[16px] relative min-w-[125px]"
                  > 
                    <button>
                      <span className="overflow-hidden text-ellipsis whitespace-nowrap pointer-events-none">
                        چت
                      </span>
                    </button>
                  </Link>
                
                <a
                  href={`tel://${userPhone}`}
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                  className="flex-1 inline-flex box-border bg-[#a62626] items-center rounded-[5px] text-[#fff] cursor-pointer text-[1rem] font-[500] h-[2.5rem] justify-center leading-normal outline-none overflow-hidden px-[16px] relative min-w-[125px]"
                >
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap pointer-events-none">
                    تماس
                  </span>
                </a>
              </>
            
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between min-h-[97vh] pb-[4rem] container mx-auto w-[100%] px-[16px]">
        {picUrl && (
          <Backdrop>
            <div
              className="flex items-center justify-center h-[100%] overflow-y-scroll"
              onClick={showSinglePic}
            >
              <img src={picUrl} alt="" />
            </div>
          </Backdrop>
        )}
        <div className="flex flex-wrap mx-[-8px]">
          <div className="flex-grow max-w-[100%] basis-0">
            <div>
              <Carousel
                infiniteLoop="true"
                width="100%"
                dynamicHeight="ture"
                showStatus={false}
                onClickItem={(i, item) => setPicUrl(item.props.src)}
              >
                {imgs ?
                  imgs.map((dt, index) => {
                    return (
                      <img
                        src={`/static/images/ads/${dt}`}
                        alt=""
                        key={index}
                      />
                    );
                  }) : ""}
              </Carousel>
              {!data ? (
                <div className="overflow-hidden text-center">
                  <Skeleton
                    width="90vw"
                    height="20em"
                    style={{ overflow: "hidden" }}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-wrap">
              <div className="order-1 flex-1">
                <div
                  className="m-0 text-[1.5rem] text-[rgba(0,0,0,.87)] font-[500] leading-[1.5] word-break hyphens-auto"
                  id="title"
                >
                  {data && data.title}
                </div>
                <div className="text-[1.1rem] text-[rgba(62,61,61,.95)] font-[500] leading-[2] m-[8px_0_16px]">
                  {date && date}
                </div>
              </div>
            </div>

            <div className="pt-[16px]">
              <div className="flex nowrap text-[1.15rem] overflow-hidden whitespace-nowrap text-[rgba(0,0,0,.86)] font-[500] justify-between leading-[2] min-h-[48px] py-[8px]">
                <div className="flex items-start min-w-[20%] ">
                  <p className="m-0 text-[rgba(0,0,0,.9)] leading-[2] overflow-hidden text-ellipsis">
                    
                    قیمت
                  </p>
                </div>

                <div className="flex items-start mr-[16px] min-w-[20%] max-w-[75%]">
                  <p className="m-0 text-[rgba(0,0,0,.9)] leading-[2] overflow-hidden text-ellipsis">
                    {!data && <Skeleton width={130} />}
                    {data && data.price > 0
                      ? data.price.toLocaleString() + " تومان "
                      : ""}
                    {data && data.price === 0 ? "توافقی" : ""}
                  </p>
                </div>
              </div>

              <hr className="divider" />
              <div className="flex nowrap text-[1.15rem] relative m-[10px_0] overflow-hidden whitespace-nowrap text-[rgba(0,0,0,.86)] font-[500] justify-between leading-[2] min-h-[55px]">
                <div className="flex items-start min-w-[20%] ">
                  <p className="m-0 text-[rgba(0,0,0,.9)] leading-[2] overflow-hidden text-ellipsis">
                    
                    {data ? (
                      <>
                        <button
                          onClick={() => shareHandler()}
                          className="btn absolute left-0 right-0 w-[35%] m-[auto] flex items-center justify-center p-[5px] text-[#fff] text-[1rem] bg-[#4985ca] rounded-[10px] hover:bg-[#5a84b5]"
                        >
                          به اشتراک گذاری
                        </button>
                      </>
                    ) : (
                      <Skeleton width={130} />
                    )}
                  </p>
                </div>
              </div>
              <hr className="divider" />

              <div className="mt-[16px]">
                <div className="flex mt-[24px] items-start">
                  <div className="flex items-end">
                    <span className="m-0 text-[rgba(0,0,0,.87)] text-[1.125rem] font-[400] leading-[1.5]">
                      توضیحات
                    </span>
                  </div>
                </div>
                <div className="flex p-0 text-[1rem] min-h-[auto] relative text-[rgba(0,0,0,.56)] font-[400] justify-between leading-[2]">
                  <div className="flex items-start min-w-0 flex-1">
                    <p
                      id="description"
                      className="leading-[2] font-[400] text-[1rem] text-[rgba(0,0,0,.87)] whitespace-pre-line word-break"
                    >
                      {data ? (
                        data.description
                      ) : (
                        <span className="overflow-hidden text-center">
                          <Skeleton
                            width="60vw"
                            count={3}
                            style={{ overflow: "hidden" }}
                          />
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-[16px]">
              <div className="flex flex-wrap items-start m-[-8px_0_0_-8px]">
                <Link
                  to={`/cat/${data && data.cat}`}
                  className="bg-[rgba(0,0,0,.04)] inline-flex items-center cursor-pointer h-[2rem] p-[0_12px] text-[0.9rem] rounded-[7px] m-[8px_0_0_8px]"
                >
                  {data && data.cat_name}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="divider mt-2" />
        <hr className="divider mt-2" />
        <Footer />
      </div>
    </SkeletonTheme>
  );
};

export default MainOfAds;
