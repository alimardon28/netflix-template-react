import React from 'react';
import "../Banner/Banner.scss";

const Banner = () => {
    return (
        <div className='banner'
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://media.istockphoto.com/photos/popcorn-and-clapperboard-picture-id1191001701?k=20&m=1191001701&s=612x612&w=0&h=uDszifNzvgeY5QrPwWvocFOUCw8ugViuw-U8LCJ1wu8=")`,
            backgroundPosition:"center center"
        }}>
            <div className="container">

              <div className="banner__contents">
                <h1 className="banner__title">
                    title
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button btn bg-dark text-light">Play</button>
                    <button className="banner__button btn bg-danger text-light">My List</button>

                </div>
                <p className="banner__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit ut iste mollitia ab similique? Quaerat impedit quis, libero dolores vel porro consequuntur facere quas saepe maxime sequi similique? Harum quaerat neque velit dolorem, totam unde consequatur odio maiores enim error at asperiores reiciendis ullam repellendus fugiat molestiae esse ea.</p>
              </div>
            </div>
        </div>
    );
}

export default Banner;
