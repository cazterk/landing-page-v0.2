import React from "react";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "../assets/scss/footer.scss";

export default function Footer() {
  const year = React.useMemo(() => {
    const now = new Date();
    return now.getFullYear();
  }, []);
  return (
    <div>
      <footer>
        <div className="footer">
          <a className="footer__logo">cazterk</a>
          <small> cazterk © {year} All Rights Reserved.</small>
          <IconContext.Provider value={{ size: 25 }}>
            <div className="footer__socials">
              <i>
                <AiFillFacebook />
              </i>
              <i>
                <FaInstagramSquare />
              </i>
              <i>
                <AiFillTwitterSquare />
              </i>
            </div>
          </IconContext.Provider>
        </div>
      </footer>
    </div>
  );
}
