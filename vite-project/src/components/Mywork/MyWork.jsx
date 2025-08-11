import React from "react";
import './MyWork.css'
import therme from '../../assets/theme_pattern.svg'
const MyWork=()=>{
    return(
        <div className="mywork">
            <div className="mywork-title">
                <h1>My latest Work</h1>
                <img src={therme} alt="" />
            </div>

        </div>
    )

}
export default MyWork