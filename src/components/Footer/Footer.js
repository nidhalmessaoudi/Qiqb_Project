import classes from "./Footer.module.css";

function Footer() {
  return (
    <section id="footer-section" className={`section ${classes.footer}`}>
      <div className={classes["footer-content"]}>
        <h2 className="section-heading">الروابط</h2>
        <div className={classes["footer-links"]}>
          <Link
            href="https://twitter.com/odacchi_san"
            className={classes["footer-link"]}
          >
            <i class="bi bi-twitter"></i>
          </Link>
          <Link
            href="https://youtube.com/c/ODACCHII"
            className={classes["footer-link"]}
          >
            <i class="bi bi-youtube"></i>
          </Link>
          <Link
            href="https://twitch.tv/odacchi"
            className={classes["footer-link"]}
          >
            <i class="bi bi-twitch"></i>
          </Link>
        </div>
        <p>
          تصميم و تطوير من قبل{" "}
          <Link
            className={classes["footer-dev"]}
            href="https://twitter.com/devnidhal"
          >
            نضال المسعودي
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function Link(props) {
  return (
    <a
      href={props.href}
      className={props.className}
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
}

export default Footer;
