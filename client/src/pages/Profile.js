import React from "react";
import "style.css";

const Profile = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="row">
          <div className="col-md-4 mt-1">
            <div className="card text-center sidebar">
              <div className="card-body">
                <img src="" className="rounded-circle" width="150"></img>
                <div className="mt-3">
                  <h3>"Profile Name"</h3>
                  <h4>Email:</h4>
                  <h4>Age:</h4>
                  <h4>Location:</h4>
                  <h4>Instruments:</h4>
                  <h4>Description:</h4>
                  <h4>Genres:</h4>
                  <h4>Influences:</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-1">
            <div className="card mb-3 content">
              <h1 className="m-3 pt-3">Projects</h1>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <h5>Project Name</h5>
                  </div>
                  <div className="col-md-9 text-secondary">
                    Project Description
                  </div>
                  <div>
                    Project file
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
