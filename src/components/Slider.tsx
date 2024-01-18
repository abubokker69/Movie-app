// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
//images
import image1 from "../assets/images/movie1.jpeg";
import image2 from "../assets/images/movie2.jpeg";
import image3 from "../assets/images/movie3.jpeg";
import image4 from "../assets/images/movie4.jpeg";
import image5 from "../assets/images/movie5.jpeg";
import image6 from "../assets/images/movie6.jpeg";
import image7 from "../assets/images/movie7.jpeg";
const items = [
  {
    image: image1,
    title: "Movie Name one",
    year: "2024",
    more: "MOVIE",
  },
  {
    image: image2,
    title: "Movie Name two",
    year: "2023",
    more: "MOVIE",
  },
  {
    image: image3,
    title: "Movie Name three",
    year: "2021",
    more: "MOVIE",
  },
  {
    image: image4,
    title: "Movie Name four",
    year: "2020",
    more: "MOVIE",
  },
  {
    image: image5,
    title: "Movie Name four",
    year: "2020",
    more: "MOVIE",
  },
  {
    image: image6,
    title: "Movie Name four",
    year: "2020",
    more: "MOVIE",
  },
  {
    image: image7,
    title: "Movie Name four",
    year: "2020",
    more: "MOVIE",
  },
  {
    image: image7,
    title: "Movie Name four",
    year: "2020",
    more: "MOVIE",
  },
];

const Slider = () => {
  return (
    <div className="mainpage">
      <div className="leftside">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="pb-[40px]"
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="slider">
                <img src={item.image} alt="" />
                <h1>{item.title}</h1>
                <div className="slider-button">
                  <p>{item.year}</p>
                  <button>{item.more}</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="rightside">Hello</div>
    </div>
  );
};

export default Slider;
