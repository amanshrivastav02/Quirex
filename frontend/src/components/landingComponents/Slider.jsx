import React from "react";
import Typewriter from "typewriter-effect";
import { FaHome } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";

const Slider = () => {
  return (
    <>
      <div className="row bg py-5" style={{ minHeight: "400px" }}>
        <div className="col-10 mx-auto">
          <div className="row d-flex align-items-center">
            {/* Text Content */}
            <div className="col-sm-6  mb-4 ">
              <p className="fs-5">
                <FaHome className="me-2 ic" />
                Real Estate Agency
              </p>
              <b className="typewriter">
                <Typewriter
                  options={{
                    strings: ["Find Your Dream Home Today."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </b>
              <p className="mt-3">
                <TiArrowRight size={25} /> Your next home is just a few clicks
                away – start your journey now. <br />
                <TiArrowRight size={25} /> From first-time buyers to seasoned
                investors, we make it easy. <br />
                <TiArrowRight size={25} /> Get personalized recommendations that
                fit your needs and budget. <br />
                <TiArrowRight size={25} /> No hidden charges, no confusion —
                just trusted real estate services. <br />
                <TiArrowRight size={25} /> Home is where your story begins —
                let’s find that story together.
              </p>
              <button className="btn btn1">Make An Enquiry</button>
            </div>

            {/* Image Content */}
            <div className="col-sm-6  text-center">
              <img
                src="/img/21_1.png"
                alt="Real Estate"
                className="img-fluid rounded "
                style={{ maxHeight: "550px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
