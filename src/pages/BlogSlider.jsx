import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./BlogSlider.css";

const BlogSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Pippa escaped production at The ScienceMuseum to found Pip & Nut",
      description: "",
      imageUrl:
        "https://images.pexels.com/photos/6773506/pexels-photo-6773506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Charlie escaped recruitment to found Moju",
      description: "",
      imageUrl:
        "https://images.pexels.com/photos/8112129/pexels-photo-8112129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title:
        "David and Anthony escaped management consultancy to found Stashbee",
      description: "",
      imageUrl:
        "https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Sarah Escaped Corporate Law to Found Wanderlust Travel Co",
      description: "",
      imageUrl:
        "https://images.pexels.com/photos/4064342/pexels-photo-4064342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      title: "Mike Escaped IT Consulting to Found GreenScape Solutions",
      description: "",
      imageUrl:
        "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 6,
      title: "Emily Escaped Fashion Marketing to Found EcoKids",
      description: "",
      imageUrl:
        "https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 7,
      title: "John Escaped Finance to Found FreshBite",
      description: "",
      imageUrl:
        "https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="blog-section">
      <h1 className="blog-title">
        Dive into the Latest Insights and Inspirations
      </h1>
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-card">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="slide-image"
              />
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <button className="read-article-button">Read Article</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogSlider;
