import React from 'react'
import {ReactComponent as Versage} from "../img/slidebar/versace.svg"
import {ReactComponent as Zara} from "../img/slidebar/zara.svg"
import {ReactComponent as Gucci} from "../img/slidebar/gucci.svg"
import {ReactComponent as Prada} from "../img/slidebar/prada.svg"
import {ReactComponent as Calvin} from "../img/slidebar/Calvin Klein.svg"

const Slidebar = () => {
  return (
    <div className="slidebar h-[122px] bg-black flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <Versage/>
        <Zara/>
        <Gucci/>
        <Prada/>
        <Calvin/>
      </div>
    </div>
  )
}

export default Slidebar