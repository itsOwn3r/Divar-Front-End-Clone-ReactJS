import React, { useState } from 'react'
import HeaderOfAds from '../Header/HeaderOfAds';
import MainOfAds from '../Main/MainOfAds';
import {useNavigate, Link, useSearchParams} from 'react-router-dom'
const Ads = () => {
    const [searchParams] = useSearchParams();
    const adsID =  searchParams.get('get') 

    const [display, setDisplay] = useState(true)
    const navigate = useNavigate()
    const hideHandler = () => {
        setDisplay(!display)
        return navigate(-1);
    }
  return (
    <>
    <HeaderOfAds />
    <MainOfAds />
  </>
  )
}

export default Ads;