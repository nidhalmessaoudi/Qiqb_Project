import Button from "../UI/Button/Button";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes["navbar-brand"]}>
        <h2>
          <span className={classes["navbar-brand__sub"]}>القيقب:</span> أوداتشي
        </h2>
      </div>
      <div className={classes["navbar-items"]}>
        <ul className={classes["navbar-list"]}>
          <Li>
            <a href="#about-section"> من هو أوداتشي؟ </a>
          </Li>
          <Li>
            <a href="#youtube-section"> أوداتشي في اليوتيوب </a>
          </Li>
          <Li>
            <a href="#twitch-section"> أوداتشي في التويتش </a>
          </Li>
          <Li>
            <a
              href="https://streamlabs.com/odacchi/tip"
              target="_blank"
              rel="noreferrer"
            >
              <Button color="primary">الدعم</Button>
            </a>
          </Li>
          <Li>
            <a href="#footer-section">
              <Button color="secondary">الروابط</Button>
            </a>
          </Li>
        </ul>
      </div>
    </nav>
  );
}

function Li(props) {
  return <li className={classes["navbar-item"]}>{props.children}</li>;
}

export default Navbar;
