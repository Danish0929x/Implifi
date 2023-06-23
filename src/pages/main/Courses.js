import React from "react";
import Navbar from "../components/Navbar";
import icons1 from "../../assets/images/icon1.png";
import icons2 from "../../assets/images/icon2.png";
import icons3 from "../../assets/images/icon3.png";
import icons4 from "../../assets/images/icon4.png";
import "./style.css";
import Course from "../components/Course";

function Certificate() {
  return (
    <div>
      <Navbar />
      <div className="courses">
        <div className="head">
          <h2>
            <span>Connect</span> to best Industry expert from all around the
            world.
          </h2>
          <h3>
            Explore all programs offer by choosen by 10000+ professionals around
            the world.
          </h3>
        </div>
        <div className="perks">
          <div className="perk">
            <img src={icons1} alt="" />
            <p>Learn from anywhere</p>
          </div>
          <div className="perk">
            <img src={icons2} alt="" />
            <p>Internationally recognised certificates</p>
          </div>
          <div className="perk">
            <img src={icons3} alt="" />
            <p>Dedicated industry experts</p>
          </div>
          <div className="perk">
            <img src={icons4} alt="" />
            <p>24x7 Support</p>
          </div>
        </div>
      </div>
      <div className="continue-workshop">
        <div className="cw-main">
          <Course
            title="Basics of Python with Data Structures and Algorithms"
            img1="https://res.cloudinary.com/dev6cpp4u/image/upload/v1687444804/1_g7yits.png"
            img2="https://files.codingninjas.com/java-11713.svg"
            desc="This is the course to pick if you are just getting into coding and want to build a strong foundation. Widely used in Data Science & Machine Learning"
            info1="40"
            info2="80"
            link="./"
          />

          
          <Course
            title="Basics of Python with Data Structures and Algorithms"
            img1="https://res.cloudinary.com/dev6cpp4u/image/upload/v1687444804/4_xf9tzx.png"
            img2="https://files.codingninjas.com/python-11712.svg"
            desc="This is the course to pick if you are just getting into coding and want to build a strong foundation. Widely used in Data Science & Machine Learning"
            info1="40"
            info2="80"
            link="./"
          />

          <Course
            title="Basics of Python with Data Structures and Algorithms"
            img1="https://res.cloudinary.com/dev6cpp4u/image/upload/v1687444803/3_c6hmhu.png"
            img2="https://files.codingninjas.com/mern-11710.svg"
            desc="This is the course to pick if you are just getting into coding and want to build a strong foundation. Widely used in Data Science & Machine Learning"
            info1="40"
            info2="80"
            link="./"
          />

          <Course
            title="Basics of Python with Data Structures and Algorithms"
            img1="https://res.cloudinary.com/dev6cpp4u/image/upload/v1687444803/5_f5i6iw.png"
            img2="https://files.codingninjas.com/python-11712.svg"
            desc="This is the course to pick if you are just getting into coding and want to build a strong foundation. Widely used in Data Science & Machine Learning"
            info1="40"
            info2="80"
            link="./"
          />

          <Course
            title="Basics of Python with Data Structures and Algorithms"
            img1="https://res.cloudinary.com/dev6cpp4u/image/upload/v1687444803/6_xx4tpq.png"
            img2="https://files.codingninjas.com/mern-11710.svg"
            desc="This is the course to pick if you are just getting into coding and want to build a strong foundation. Widely used in Data Science & Machine Learning"
            info1="40"
            info2="80"
            link="./"
          />

          <Course
            title="Basics of Python with Data Structures and Algorithms"
            img1="https://res.cloudinary.com/dev6cpp4u/image/upload/v1687444803/2_spo6rv.png"
            img2="https://files.codingninjas.com/python-11712.svg"
            desc="This is the course to pick if you are just getting into coding and want to build a strong foundation. Widely used in Data Science & Machine Learning"
            info1="40"
            info2="80"
            link="./"
          />

        </div>
      </div>
    </div>
  )
}

export default Certificate
