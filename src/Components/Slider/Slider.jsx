import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Style.css";
import { Navigation } from "swiper/modules";
import axios from "axios";

export default function App() {
  const [slider, setSlider] = useState(null);
  const sliderData = async () => {
    try {
      const sliderData = await axios.get("https://arashghanbarzadeh1384.github.io/Jason-file/db.json");
      setSlider(sliderData.data.Slider);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    sliderData();
  }, []);
  return (
    <>
      <div className="slider">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {slider?.map(item => {
            return (
              <SwiperSlide key={item.id}>
                <img src={item.images} alt={item.alt} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
