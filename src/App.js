import React from "react";
import "./style.css";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const data = [
  {
    id: 1,
    button1: "Read Article",
    button2: "Watch Video",
    title: "Sed Ut Perspiciatis Unde Omnis Iste Natus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad…"
  },
  {
    id: 2,
    button1: "Read Article",
    button2: "Watch Video",
    title: "Sed Ut Perspiciatis Unde Omnis Iste Natus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad…"
  },
  {
    id: 3,
    button1: "Read Article",
    button2: "Watch Video",
    title: "Sed Ut Perspiciatis Unde Omnis Iste Natus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad…"
  },
  {
    id: 4,
    button1: "Read Article",
    button2: "Watch Video",
    title: "4-Sed Ut Perspiciatis Unde Omnis Iste Natus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad…"
  },
  {
    id: 5,
    button1: "Read Article",
    button2: "Watch Video",
    title: "5-Sed Ut Perspiciatis Unde Omnis Iste Natus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad…"
  },
  {
    id: 6,
    button1: "Read Article",
    button2: "Watch Video",
    title: "6-Sed Ut Perspiciatis Unde Omnis Iste Natus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad…"
  },
  {
    id: 7,
    button1: "Read Article",
    button2: "Watch Video",
    title: "7-Sed Ut Perspiciatis Unde Omnis Iste Natus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad…"
  },
  {
    id: 8,
    button1: "Read Article",
    button2: "Watch Video",
    title: "8-Sed Ut Perspiciatis Unde Omnis Iste Natus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad…"
  }
];

export default function App() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
    >
      {data.map(user => (
        <SwiperSlide key={user.id} className="main">
          <div className="master">
            <div className="title">
              <h5>{user.title}</h5>
            </div>
            <div className="main_data">
              <p>{user.description}</p>
            </div>
            <div className="readarticle">
              <p>{user.button1}</p>
              {/* <p id = "video">Watch Video</p> */}
            </div>
            <div className="video">
              <p>{user.button2}</p>
            </div>
          </div>
          <div className="Triangle" />
          <div className="vertical-line" />
          <div className="horizontal-line" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
