import classes from "./About.module.css";

function About() {
  return (
    <section id="about-section" className={classes.about}>
      <h2 className="section-heading">من هو أوداتشي؟</h2>
      <div className={classes["about-container"]}>
        <div
          className={`${classes["about-img__container"]} ${classes["about-item"]}`}
        >
          <img
            src="/ODACCHI.jpeg"
            className={classes["about-img"]}
            alt="Odacchi"
          />
        </div>
        <div className={`${classes["about-content"]} ${classes["about-item"]}`}>
          <p className={classes["about-content__child"]}>
            أوداتشي من تأسيس شعيب هي قناة تهتم بمانجا ون بيس خاصة وذلك بطرح
            فرضيات ونقاشات تحلل أحداث هذه القصة الأسطورية و بالانمي عامة. لها
            قناة على اليوتيوب للانطباعات و النقاشات و قناة على التويتش للبثوث
            المتنوعة من انمي و العاب.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
