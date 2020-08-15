import React from "react";
import Icon from "@mdi/react";
import { mdiVideoOutline, mdiCommentTextOutline } from "@mdi/js";

//Load user images
import user1 from "../../asset/img/user1.png";
import user2 from "../../asset/img/user2.png";
import user3 from "../../asset/img/user3.png";
import user4 from "../../asset/img/user4.png";
import user5 from "../../asset/img/user5.png";
import user6 from "../../asset/img/user6.png";
import user7 from "../../asset/img/user7.png";
import video from "../../asset/task.mp4";

const Card = () => {
  const userData = [
    {
      title: "John Doe",
      sub: "Comedian",
      img: user1,
    },
    {
      title: "John Doe",
      sub: "Comedian",
      img: user2,
    },
    {
      title: "John Doe",
      sub: "Comedian",
      img: user3,
    },
    {
      title: "John Doe",
      sub: "Comedian",
      img: user4,
    },
    {
      title: "John Doe",
      sub: "Comedian",
      img: user5,
    },
    {
      title: "John Doe",
      sub: "Comedian",
      img: user6,
    },
    {
      title: "John Doe",
      sub: "Comedian",
      img: user7,
    },
  ];
  return (
    <>
      <h3 className="heading-3">Featured</h3>
      <section className="tiles-container">
        {userData.map((item, index) => (
          <div key={index} className="tile group">
            <img src={item.img} className="tile-image group-hover:hidden" />
            <video
              className="tile-video group-hover:flex hidden"
              onMouseOver={(event) => event.currentTarget.play()}
              onMouseOut={(event) => event.currentTarget.pause()}
              loop
              preload="auto"
            >
              <source src={video} type="video/mp4" />
            </video>
            <div className="tile-meta-container scale-0 transform group-hover:scale-100">
              <div className="tile-meta-price">
                <span>
                  <Icon
                    path={mdiVideoOutline}
                    title="Logo"
                    size={0.75}
                    color="#fff"
                  />
                  <span>$200</span>
                </span>
                <span>
                  <Icon
                    path={mdiCommentTextOutline}
                    title="Logo"
                    size={0.75}
                    color="#fff"
                  />
                  <span>$2</span>
                </span>
              </div>
              <div className="tile-meta-info">
                <span className="title">{item.title}</span>
                <span className="subtitle">{item.sub}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Card;
