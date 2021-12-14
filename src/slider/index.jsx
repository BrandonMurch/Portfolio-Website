import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.min.css"; // core Swiper
import "swiper/modules/navigation/navigation.min.css";
import "./slider.min.css";

function Slider(props) {
	return (
		<Swiper
			modules={[Navigation]}
			spaceBetween={70}
			slidesPerView={1}
			navigation
		>
			{props.children.map((child, index) => (
				<SwiperSlide key={index}>{child}</SwiperSlide>
			))}
		</Swiper>
	);
}

export default Slider;
