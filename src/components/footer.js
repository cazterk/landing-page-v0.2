import React from "react";
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
          <div className="footer__socials">
            <i>facebook</i>
            <i>instagram</i>
            <i>twitter</i>
          </div>
        </div>
      </footer>
    </div>
  );
}
