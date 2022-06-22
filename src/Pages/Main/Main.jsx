import React from "react";
import "./Main.scss";
// import videos from "../../assets/videos/video.m4v";
// import video from "../../assets/videos/video1.m4v";
import pile from "../../assets/images/pile.png";
import prop from "../../assets/images/prop.png";
import tv from "../../assets/images/tv.png";
import nicon from "../../assets/images/nicon.png";
import phone from "../../assets/images/phone.jpg";

const Main = () => {
  return (
    <>
      <main className="main">
        <section className="main__section-enjoy">
           <div className="container">

            <div className="main__enjoy">
                <div className="main__enjoy-left">
                    <h2 className="main__enjoy-left-title">
                    Enjoy on your TV.
                    </h2>
                    <p className="main__enjoy-left-desc">
                    Watch on Smart TVs, Playstation, Xbox,<br></br> Chromecast, Apple TV, Blu-ray players, and <br></br>more.
                    </p>
                </div>
                <div className="main__enjoy-right">
                    <img src={tv} alt="" />
                    <video src={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png'}></video>
                </div>
            </div>

           </div>
        </section>
      </main>
    </>
  );
};

export default Main;
