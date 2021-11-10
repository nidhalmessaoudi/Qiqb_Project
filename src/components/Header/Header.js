import { Typewriter } from "react-simple-typewriter";

import classes from "./Header.module.css";

function Header() {
  const headerWords = [
    "انمي",
    "انطباعات",
    "تحليلات",
    "ونبيسيات",
    "بثوث",
    "نقاشات",
    "ماراثونات",
  ];

  return (
    <section id="header" className={classes.header}>
      <h1 className={classes["header-heading"]}>
        <span>نقدم: </span>
        <span className={classes["header-writer"]}>
          <Typewriter
            words={headerWords}
            typeSpeed={120}
            deleteSpeed={100}
            cursor={true}
            cursorStyle="|"
            loop={false}
          />
        </span>
      </h1>
    </section>
  );
}

export default Header;
