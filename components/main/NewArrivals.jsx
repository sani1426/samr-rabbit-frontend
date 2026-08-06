"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import backendApi from "@/common/BackendApi";

const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const { data } = await axios.get(backendApi.getNewArrivals.url);
        if (data?.success) {
          setNewArrivals(data?.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchNewArrivals();
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">جدیدترین محصولات</h2>
        <p className="text-lg text-gray-600 mb-8">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },

          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="mb-12"
      >
        {newArrivals.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="min-w-full sm:min-w-[50%] lg:min-w-[30%] relative">
              <img
                src={item.images[0]?.url}
                alt={item.images[0]?.altText}
                className="w-full h-125 object-cover rounded-lg"
                draggable="false"
              />
              <div className="absolute bottom-0 right-0 left-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
                <Link href={`/products/${item._id}`} className="block">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="mt-1">${item.price}</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewArrivals;
