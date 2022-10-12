import React from 'react'
import "../styles/Pnavbar.css"


const Pnavbar = () => {

  return (
    <div className="pnav">
        <div>
            <a href="https://www.mi.com/in/">I INDIA</a><span>|</span>
            <a href="https://in.event.mi.com/in/install-mi-store"> GET APP</a><span>|</span>
            <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1" >HELP</a><span>|</span>
            <a href="https://www.mi.com/in/service/authorized_stores/"> Authorized stores</a><span>|</span>
        </div>
        <div>
            <a href="https://store.mi.com/in/site/login">SIGN IN</a><span>|</span>
            <a href="https://account.xiaomi.com/fe/service/login/password?_locale=en_IN&checkSafePhone=false&sid=i18n_in_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fstore.mi.com%25252Fin%25252Flogin%25252Fcallback%25253Ffollowup%25253Dhttps%2525253A%2525252F%2525252Fwww.mi.com%2525252Fin%2525252F%252526sign%25253DYWY1OGE5MmVkNWU0OWVmN2E1ZTUzNzhiOTY2OGVkMDU5ZDljNGRkNQ%25252C%25252C%2526sid%253Di18n_in_pc_pro%2526_locale%253Den_IN%2526checkSafePhone%253Dfalse&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%252F%26sign%3DYWY1OGE5MmVkNWU0OWVmN2E1ZTUzNzhiOTY2OGVkMDU5ZDljNGRkNQ%2C%2C&_sign=y2X%2BJ2N3%2Fvyraa65wFdQfKWnXao%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=">SIGN UP</a><span>|</span>
            <a href="http://store.mi.com/in/site/login">CART(0)</a><span>|</span>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@30,500,0,0" />
            <span class="material-symbols-outlined">shopping_cart</span>
        </div>
    </div>
  )
}

export default Pnavbar