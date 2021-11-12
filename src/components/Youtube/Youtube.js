// import axios from "axios";
import { nanoid } from "nanoid";
import Button from "../UI/Button/Button";
import Video from "./Video";

import classes from "./Youtube.module.css";

function Youtube() {
  const videos = [
    {
      id: "kaHGADqmtmk",
      title:
        "السر الصادم الذي أخفاه أودا في الأمبل داون ولم ننتبه له 🔥 !! ",
    },
    {
      id: "kxTu4oYOJVw",
      title:
        "الكشف عن الطاقم التمثيلي لمسلسل ون بيس الواقعي - نامي سوان محبوبة الخرفان 😂!!",
    },
    {
      id: "pepJyI4VoDA",
      title:
        "قوة النصل الأسود - ورقة كايدو الرابحة - والد زورو أحد النمبرز - القتال المنتظر : زورو vs سانجي !!",
    },
    {
      id: "GYcKA4V8UPA",
      title:
        "تسريبات مانجا ون بيس 1032 / 1033 / 1034 - قوة سانجي جديدة - أستيقاظ قوة زورو !!",
    },
  ];

  //   useEffect(() => {
  //     (async function fetchVideos() {
  //       try {
  //         const res = await axios.get(
  //           "https://www.googleapis.com/youtube/v3/search",
  //           {
  //             params: {
  //               channelId: process.env.REACT_APP_YT_CHANNEL_ID,
  //               key: process.env.REACT_APP_YT_API_KEY,
  //               part: "snippet",
  //               order: "date",
  //               maxResults: 4,
  //             },
  //           }
  //         );
  //         setVideos(res.data.items);
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     })();
  //   }, [videos]);

  return (
    <section className="section" id="youtube-section">
      <h2 className="section-heading">أوداتشي في اليوتيوب</h2>
      <em className="section-heading__sub">(عرض اخر ٤ حلقات)</em>
      <div className={classes["videos-container"]}>
        {videos.map((video) => {
          return <Video key={nanoid(8)} id={video.id} title={video.title} />;
        })}
      </div>
      <a
        href="https://www.youtube.com/channel/UCwWXvBSNiqhCD_vEQTFE6vA"
        target="_blank"
        rel="noreferrer"
        className={classes["youtube-visit"]}
      >
        <Button color="primary">زيارة القناة</Button>
      </a>
    </section>
  );
}

export default Youtube;
