import React from "react";
import Navbar from "../components/Navbar";
import "./style.css";

function Profile() {
  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile-info">
        <div className="profile-box box">
          <img src="./img.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
            mollitia! Error exercitationem est alias quam aliquid, dolore atque
            ducimus, voluptatum eveniet, voluptates rerum eos. Maiores
            praesentium dignissimos corporis aperiam ratione eum,
            necessitatibus, unde temporibus molestiae maxime voluptatibus
            corrupti magni qui! Voluptates amet, esse deserunt sapiente
            laboriosam eligendi quam ducimus laborum, dignissimos iste ipsam at
            voluptas possimus dolor odio velit cumque excepturi dolore libero
            dolorum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
