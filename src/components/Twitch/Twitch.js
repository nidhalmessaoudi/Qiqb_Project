import { TwitchEmbed } from "react-twitch-embed";

import classes from "./Twitch.module.css";

function Twitch() {
  return (
    <section className="section" id="twitch-section">
      <h2 className="section-heading">أوداتشي في التويتش</h2>
      <div className={classes["twitch-container"]}>
        <TwitchEmbed
          channel="odacchi"
          id="odacchi"
          muted={true}
          theme="dark"
          width="100%"
          height={540}
        />
      </div>
    </section>
  );
}

export default Twitch;
