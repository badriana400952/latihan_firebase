import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, EffectCoverflow } from 'swiper';





const Swiperr = () => {
    return (
        <div className='container'>
            <h1 className='heading center'>swiper</h1>

            <Swiper
                // install Swiper modules
                effect={'oferflow'}
                grabCursor={true}
                centerdSlides={true}
                loop={true}
                slidesPerview={'auto'}
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
                className="swifer_container"
                pagination={{el:'.swiper-pagination', clickable:true}}
                navigation={{nextEl: '.swiper-button-next', prevEl:'.swiper-button-prev', clickable:true}}
                modules={[Navigation, Pagination, EffectCoverflow]}
            >
                <SwiperSlide><img src='https://th.bing.com/th/id/OIP.4d7Emr_d4fJnEE6zK7pj_wHaFK?pid=ImgDet&rs=1' alt='1' /> </SwiperSlide>
                <SwiperSlide><img src='https://th.bing.com/th/id/OIP.4d7Emr_d4fJnEE6zK7pj_wHaFK?pid=ImgDet&rs=1' alt='2' /> </SwiperSlide>
                <SwiperSlide><img src='https://th.bing.com/th/id/OIP.4d7Emr_d4fJnEE6zK7pj_wHaFK?pid=ImgDet&rs=1' alt='3' /> </SwiperSlide>
                <SwiperSlide><img src='https://th.bing.com/th/id/OIP.4d7Emr_d4fJnEE6zK7pj_wHaFK?pid=ImgDet&rs=1' alt='14' /> </SwiperSlide>
                <SwiperSlide><img src='https://th.bing.com/th/id/OIP.4d7Emr_d4fJnEE6zK7pj_wHaFK?pid=ImgDet&rs=1' alt='15' /> </SwiperSlide>

                <div className='slider-container'>
                    <div className='swiper-button-prev slider-arrow'>
                        <icn-icon className="arrow-back-outline"></icn-icon>
                    </div>
                    <div className='swiper-button-next slider-arrow'>
                        <ion-icon className="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
            </Swiper>
        </div>
    )
}

export default Swiperr