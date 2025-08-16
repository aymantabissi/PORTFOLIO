import React from "react";
import './MyWork.css'
import therme from '../../assets/theme_pattern.svg'
import mywork_data from "../../assets/mywork_data";
import arrow from "../../assets/arrow_icon.svg"
const MyWork = () => {
    return (
        <div id="work" className="mywork">
            <div className="mywork-title">
                <h1>My latest Work</h1>
                <img src={therme} alt="" />
            </div>
            <div className="mywork-container">
                {
                    mywork_data.map((work, index) => {
                        return <img key={index} src={work.w_img} alt="" />
                    })
                }

            </div>
            <div className="mywork-showmore">
                <p>show More</p>
                <img src={arrow} alt="" />
            </div>

        </div>
    )

}
export default MyWork