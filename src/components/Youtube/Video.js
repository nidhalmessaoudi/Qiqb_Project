import classes from "./Video.module.css";

function Video(props) {
  return (
    <iframe
      title={props.title}
      type="text/html"
      width="400"
      height="400"
      src={`http://www.youtube.com/embed/${props.id}?enablejsapi=1&origin=https://example.com`}
      className={classes["yt-video"]}
      frameBorder={0}
    ></iframe>
  );
}

export default Video;
