import React, { useState } from 'react'
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
const SubCat = () => {
    const [display, setDisplay] = useState(true)

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