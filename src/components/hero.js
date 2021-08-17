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
          <h1 className="hero__title">
            cazterk <span>here</span>
          </h1>
          <p>
            What's up I enjoy making awesome web apps in react and indie games
            via unity and c#. I love discovering new things and exploring new
            technologies in many aspects.
          </p>
          <div className="hero__para2">
            <p>
              Below are some of my project and content I work on, feel free to
              email me for inquiries. <FaHandPointRight />
            </p>{" "}
            <a href="mailto:zcephas2@gmail.com">
              <IoMdMail />
            </a>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
