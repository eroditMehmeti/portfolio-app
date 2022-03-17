import Typical from "react-typical";
import React from "react";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.facebook.com/erodit12">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.instagram.com/eroditmehmetii/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}Hello, I'm <span className="highlighted-text">Erodit</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev",
                    2000,
                    "Front End Developer",
                    2000,
                    "Mern Stack Dev",
                    2000,
                    "Cross Platform Dev",
                    2000,
                    "React/Native Dev",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of Building applications with front and back end
                operatinons
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {" "}
              Hire me
              {""}
            </button>
            <a
              href="EroditMehmeti-CV.pdf"
              download="Erodit EroditMehmeti-CV.pdf"
            >
              <button className="btn highlighted-btn">Get Resumes</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
