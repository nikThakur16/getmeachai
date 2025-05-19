import React from 'react';
import Slider from 'react-slick';
import MembershipCard from './MembershipCard';
import { NextArrow, PrevArrow } from '../../CustomArrows';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MembershipCarousel() {
  const data = [
    {
      id: '1',
      title: 'Uncommon !',
      price: 1.5,
      unit: 'release',
      image: '/images/childZoro.jpg',
      features: [
        'All of our assets',
        'Discord sneak-peek channel',
        'Name in Hall of Fame'
      ],
      disabled: true,
    },
    {
      id: '2',
      title: 'Rare !',
      price: 3.5,
      unit: 'release',
      image: '/images/teenZoro.jpg',
      features: [
        'Rewards from previous tier',
        'Special Discord role',
        'Simple colour requests'
      ],
      badge: 'MOST POPULAR',
    },
    {
      id: '3',
      title: 'Epic !',
      price: 5.5,
      unit: 'release',
      image: '/images/adultZoro.jpg',
      features: [
        'All rewards from previous tiers',
        'Map-Animator Blender file',
        'Access to blender-help channel'
      ],
    },
    {
      id: '4',
      title: 'Legendary !',
      price: 10.0,
      unit: 'release',
      image: '/images/seniorZoro.jpg',
      features: ['Extra perk 1', 'Extra perk 2'],
    },
    // …add more if you like
  ];

  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
 
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768,  settings: { slidesToShow: 2 } },
      { breakpoint: 480,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="  max-w-screen-xl mx-auto   py-8">
      <h2 className="text-2xl text-center text-white mb-6">
        Choose your membership
      </h2>
      <Slider {...settings} className="px-8 ">
        {data.map((m) => (
          <div key={m.id} className="px-2">
            <MembershipCard data={m} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
