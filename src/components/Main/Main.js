import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import Contents from "./Contents";
import Backdrop from "../Backdrop/Backdrop";
import { data as DUMMYDATA } from "./DUMMYDATA";
const Main = ({ adsID }) => {
  let { id } = useParams();
  let { query } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const location = useLocation();
  const myPosts = !id && !adsID && location.pathname.includes("my/posts");
  console.log(query)
  useEffect(() => {
    const req = async () => {
      try {
        if (id) {
          let cat = [];
         DUMMYDATA.forEach(ad => {
         if (ad.cat === id) {
          cat.push(ad)
        }
        setData(cat);
        })}else if(query){
          console.log(query)
        let search = [];
         DUMMYDATA.forEach(ad => {
         if (ad.title.includes(query) || ad.description.includes(query)) {
          search.push(ad)
        }
        setData(search);
        })
        }else{
          setData(DUMMYDATA);
        }
      } catch (error) {
        if (error.message === "Failed to fetch") {
          setError("خطای ارتباط با اینترنت");
        } else {
          setError(error.message);
        }
        // setLoading(false)
        console.error(error.message === "Failed to fetch");
      }
    };
    req();
  }, [refresh]);
  return (
    <div className="main pb-[56px]">
      <div className="relative p-0 mx-a md:max-w-[100%]">
        {!adsID && (
          <header className="sticky z-10 top-[64px] bg-[#fff] shadow-[0_1px_2px_0_rgba(0,0,0,.12)] w-[100%] h-[48px]">
            <nav className="px-[16px] h-[3rem]">
              <div className="relative w-[100%] h-[100%]">
                <div className="flex items-center flex-row overflow-auto no-scrollbar h-[100%] w-[100%]">
                  <Link
                    to="/cat"
                    className="ml-[8px] text-[rgba(0,0,0,.56)] flex-shrink-0 pr-[8px] bg-transparent border-solid border-[1px] border-[rgba(0,0,0,.12)] rounded-[16px] items-center inline-flex text-[0.875rem] font-[600] h-[2rem] outline-none px-[12px]"
                  >
                    <img
                      className="text-[1.5rem] ml-[4px]"
                      src="/static/images/menu-svgrepo-com.svg"
                      alt=""
                    />
                    دسته‌ها
                  </Link>
                  <Link
                    to="/cat/car"
                    className="ml-[8px] text-[rgba(0,0,0,.56)] flex-shrink-0 bg-transparent border-solid border-[1px] border-[rgba(0,0,0,.12)] rounded-[16px] items-center inline-flex text-[0.875rem] font-[600] h-[2rem] outline-none px-[12px]"
                  >
                    خودرو سواری
                  </Link>

                  <Link
                    to="/cat/estate"
                    className="ml-[8px] text-[rgba(0,0,0,.56)] flex-shrink-0 bg-transparent border-solid border-[1px] border-[rgba(0,0,0,.12)] rounded-[16px] items-center inline-flex text-[0.875rem] font-[600] h-[2rem] outline-none px-[12px]"
                  >
                    املاک
                  </Link>

                  <Link
                    to="/cat/digital"
                    className="ml-[8px] text-[rgba(0,0,0,.56)] flex-shrink-0 bg-transparent border-solid border-[1px] border-[rgba(0,0,0,.12)] rounded-[16px] items-center inline-flex text-[0.875rem] font-[600] h-[2rem] outline-none px-[12px]"
                  >
                    کالای دیجیتال
                  </Link>

                  <Link
                    to="/cat/home"
                    className="ml-[8px] text-[rgba(0,0,0,.56)] flex-shrink-0 bg-transparent border-solid border-[1px] border-[rgba(0,0,0,.12)] rounded-[16px] items-center inline-flex text-[0.875rem] font-[600] h-[2rem] outline-none px-[12px]"
                  >
                    لوازم خانگی
                  </Link>

                  <Link
                    to="/cat/food"
                    className="ml-[8px] text-[rgba(0,0,0,.56)] flex-shrink-0 bg-transparent border-solid border-[1px] border-[rgba(0,0,0,.12)] rounded-[16px] items-center inline-flex text-[0.875rem] font-[600] h-[2rem] outline-none px-[12px]"
                  >
                    خوردنی و آشامیدنی
                  </Link>

                  <Link
                    to="/cat/services"
                    className="ml-[8px] text-[rgba(0,0,0,.56)] flex-shrink-0 bg-transparent border-solid border-[1px] border-[rgba(0,0,0,.12)] rounded-[16px] items-center inline-flex text-[0.875rem] font-[600] h-[2rem] outline-none px-[12px]"
                  >
                    خدمات
                  </Link>

                  <Link
                    to="/cat/other"
                    className="ml-[8px] text-[rgba(0,0,0,.56)] flex-shrink-0 bg-transparent border-solid border-[1px] border-[rgba(0,0,0,.12)] rounded-[16px] items-center inline-flex text-[0.875rem] font-[600] h-[2rem] outline-none px-[12px]"
                  >
                    متفرقه
                  </Link>
                </div>
              </div>
            </nav>
          </header>
        )}
        <main className="w-[100%] pt-[24px] m-0 relative block">
          {!adsID && (
            <h1 className="p-[0_16px] block text-[rgba(0,0,0,.56)] text-[0.95rem] font-[400] leading-[1.5rem] m-0">
              دیوار اهواز:‌ انواع آگهی‌ها و خدمات در اهواز
            </h1>
          )}

          <div>
            <div className="p-[8px] flex">
              <div className="static h-[100%] w-[100%]">
                <div className="py-0 min-h-[100px] flex flex-wrap will-change-transform transform-[translateZ(0)]">

                  {!data && <Contents type="dummy" />}
                  {!data && <Contents type="dummy" />}
                  {!data && <Contents type="dummy" />}
                  {!data && <Contents type="dummy" />}
                  {error ? (
                    <Backdrop>
                      <div className="h-[100vh] fixed left-0 right-0 bg-gray-700 overflow-hidden">
                        <div className="flex flex-col h-[50vh] items-center justify-center text-[#fff] text-[1.6rem] overflow-hidden">
                          <div className="flex items-center justify-center underline">
                            {error}
                            <img
                              src="/static/images/wifi-off-svgrepo-com.svg"
                              alt="خطای ارتباط با اینترنت"
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
                  {data?.map((ads, index) => {
                    return (
                      <Contents
                        ad_id={ads.id || null}
                        name={ads.title}
                        price={ads.price}
                        date={ads.date}
                        images={ads.images || "no-pic.svg"}
                        key={index}
                        myPosts={myPosts}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Main;
