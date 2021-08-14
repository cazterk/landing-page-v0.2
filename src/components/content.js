import React from "react";
import { SiJavascript, SiUnity, SiYoutube, SiBlogger } from "react-icons/si";
import { IconContext } from "react-icons/lib";
import "../assets/scss/content.scss";

export default function Content() {
  return (
    <div>
      <div className="content">
        <div className="content__title">
          {" "}
          <h2>Content</h2>
        </div>
        <IconContext.Provider value={{ size: 35 }}>
          <div className="cards">
            <div className="card">
              <div className="card__icon">
                {" "}
                <SiJavascript />
              </div>
              <div className="card__title">
                <h3>Web Development</h3>
              </div>
              <p>
                I'm a reactjs developer, I like good ui design, I do backend as
                well with node and dotnet, do click here to check out my repos
                on github
              </p>
            </div>
            <div className="card">
              <div className="card__icon">
                {" "}
                <SiUnity />
              </div>
              <div className="card__title">
                <h3>Game Development</h3>
              </div>
              <p>
                I like making games, using unity, I'm always learning from the
                internet and established people in the industry, do click here
                to check out my games
              </p>
            </div>
            <div className="card">
              <div className="card__icon">
                {" "}
                <SiYoutube />
              </div>
              <div className="card__title">
                <h3>Youtube</h3>
              </div>
              <p>
                Tech focused channel, programming tips and other random cool
                stuff, feel free to subscribe its free, do click here
              </p>
            </div>
            <div className="card">
              <div className="card__icon">
                {" "}
                <SiBlogger />
              </div>
              <div className="card__title">
                <h3>Blogging</h3>
              </div>
              <p>
                Click here to checkout my blog, I write about technology,
                software and other cool stuff, its called terklog
              </p>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
