import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaHandPointRight } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "../assets/scss/hero.scss";

export default function Hero() {
  return (
    <IconContext.Provider value={{ size: 20 }}>
      <div>
        <div className="hero">
          <h2 className="hero__title">
            cazterk <span>here :)</span>
          </h2>
          <div className="hero__para">
            <p id="p1">
              What's up I enjoy making awesome web apps in react and indie games
              via unity and c#. I love discovering new things and exploring new
              technologies in many aspects.
            </p>
            <p>
              Below are some of my project and content I work on, feel free to
              email me for inquiries. <FaHandPointRight />
              <span>
                <a href="mailto:zcephas2@gmail.com">
                  <IoMdMail />
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
