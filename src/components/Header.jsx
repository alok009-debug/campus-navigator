import { useState } from "react";
// import Styles from './components-css/Header.module.css'
import Styles from './components-css/Header.module.css'

const Header =()=>{
const campus_name = "Dspmu"
    return(
        <div className={Styles.campusName}>
            <h2>{campus_name} navigator</h2>
        </div>
    )
}

export default(Header)