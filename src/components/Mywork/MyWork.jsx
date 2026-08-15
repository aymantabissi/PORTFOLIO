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
                        return (
                            <div className="mywork-card" key={index}>
                                <img src={work.w_img} alt={work.w_name} />
                                <div className="mywork-card-body">
                                    <h3>{work.w_name}</h3>
                                    <p>{work.w_desc}</p>
                                    <div className="mywork-card-tags">
                                        {work.w_tags.map((tag, i) => (
                                            <span key={i}>{tag}</span>
                                        ))}
                                    </div>
                                    <div className="mywork-card-links">
                                        {work.w_live && (
                                            <a href={work.w_live} target="_blank" rel="noopener noreferrer">
                                                Live demo <img src={arrow} alt="" />
                                            </a>
                                        )}
                                        {work.w_github && (
                                            <a href={work.w_github} target="_blank" rel="noopener noreferrer">
                                                Code <img src={arrow} alt="" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <a className="mywork-showmore" href="https://github.com/aymantabissi" target="_blank" rel="noopener noreferrer">
                <p>See more on GitHub</p>
                <img src={arrow} alt="" />
            </a>

        </div>
    )

}
export default MyWork
