import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { EffectCube, Pagination, Autoplay } from "swiper";
import img1 from "../../../assets/images/banner-images/banner-img-1.jpg"
import img2 from "../../../assets/images/banner-images/banner-img-2.jpg"
import img3 from "../../../assets/images/banner-images/banner-img-3.jpg"
import img4 from "../../../assets/images/banner-images/banner-img-4.jpg"
const SliderSection = () => {
    return (
        <Swiper
                    effect={"cube"}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                    pagination={false}
                    modules={[Autoplay, EffectCube, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} />
                    </SwiperSlide>
                </Swiper>
    );
};

export default SliderSection;