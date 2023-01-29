import React  from "react";
import "./styles.css";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function Card({ card }) {
    return (
    <div className="card-box">
        <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={false}
        mousewheel={true}
        cssMode={true}
        pagination
        modules={[Pagination, Navigation]}
        className= "swiper-container"
        >
            {card.imgSrc.map((src, i) => (
            <SwiperSlide key={i}>
                <img alt=""
                src={src} className="card-img"
                />
            </SwiperSlide>
            ))}
            {/* <SwiperSlide>
                <img
                src="https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg"
                className="card-img"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                src="https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2020/04/The-Muraka-Undersea-Bedroom-scaled.jpg"
                className="card-img"
                />
            </SwiperSlide> */}
        </Swiper>
        <div className="card-info-flex">
            <h3 className="card-title">{card.title}</h3>
            <div className="card-rating">
                <StarRateRoundedIcon />
                <p>{card.rating}</p>
            </div>
        </div>
        <p style={{margin: 0, color: "var(--font-grey)" }}>
            {card.desc}
        </p>
        <p style={{margin: 0, color: "var(--font-grey)" }}>{card.date}</p>
        <p style={{margin: "0.2rem", fontSize: "1rem", color: "var(--font-grey)" }}>
            <span style={{ fontWeight: "600"}}>{card.price}</span> night
        </p>
    </div>
    );
}

export default Card;
