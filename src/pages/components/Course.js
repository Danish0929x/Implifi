import React from 'react'
import course1 from "../../assets/images/course-1.png";
import { IoMdTime } from 'react-icons/io';
import { AiOutlineCode } from 'react-icons/ai'
import { Link } from 'react-router-dom';


function Course(props) {
  const { title, img1, img2, desc, info1, info2, link } = props;
  return (
    <div>
      <div className="cw-main-item">
              <img src={img1} alt="course-1" />
              <div className="cw-main-item-info">
                <div className="cw-main-item-info-top">
                  <h2>{title}</h2>
                  <img
                    src={img2}
                    alt="course"
                  />
                </div>
                <div className="cw-main-item-info-main">
                    <p>{desc}</p>
                    <div className="cwmiim-item"><IoMdTime /> {info1}+ Hours  </div>
                    <div className="cwmiim-item"><AiOutlineCode /> {info2}+ Problems  </div> <br />
                    <Link to={link}>Continue</Link>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Course
