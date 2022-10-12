import React from 'react'
import {Link} from "react-router-dom"
import "../styles/HotAccesoriesMenu.css"


const HotAccesoriesMenu = () => {
  return (
    <div className="HotAccessoriesMenu">
        <Link className="HotAccessoriesLink" to="/music"> Music Store</Link>
        <Link className="HotAccessoriesLink" to="/smartDevice"> Smart Devices</Link>
        <Link className="HotAccessoriesLink" to="/home"> Home</Link>
        <Link className="HotAccessoriesLink" to="/lifeStyle"> Life Style</Link>
        <Link className="HotAccessoriesLink" to="/moblieAccessories"> Moblie Accessories</Link>

    </div>
  )
}

export default HotAccesoriesMenu