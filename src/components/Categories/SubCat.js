import React, { useState } from 'react'
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import {useParams, useNavigate, Link} from 'react-router-dom'
const SubCat = () => {
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
    {display && 
            <Main />
    }
  </>
  )
}

export default SubCat