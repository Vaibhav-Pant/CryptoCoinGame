import React, { useState } from 'react'
import Terms from '../Pages/Terms'
import HomePage from '../Pages/HomePage'
import MetaMaskPopup from '../Components/MetaMaskpopup'

const App = () => {

  const [terms, setTerms] = useState(true);
  const [noMeta, setNoMeta] = useState(false);

  const handleClick = () => {
    if(!window.ethereum){
      setTerms(true);
      setNoMeta(true);
    }else{
      setTerms(false);
      setNoMeta(false);
    }
  }

  return (
    <>
    {
      terms ? <Terms setTerms={handleClick}/> : <HomePage setTerms={() => setTerms(!terms)}/>
    }
    {
      noMeta ? <MetaMaskPopup/> : ""
    }
    </>

  )
}

export default App
