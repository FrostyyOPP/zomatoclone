import React from 'react'
import './slider.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Slider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='sliders'>
        <h2 className='head-slides'>Inspiration for your first order</h2>
        <Carousel responsive={responsive} className="container">
  <div className='slider'>
    <img className='slider-head' src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" alt="" />
    <h6 className='slider-body'>Pizza</h6>
  </div>
  <div className='slider'>
    <img className='slider-head' src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png" alt="" />
    <h6 className='slider-body'>Chicken</h6>
  </div>
  <div className='slider'>
    <img className='slider-head' src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" alt="" />
    <h6 className='slider-body'>Burger</h6>
  </div>
  <div className='slider'>
    <img className='slider-head' src="https://b.zmtcdn.com/data/o2_assets/9cf8166717d81ec3212d0707a06749f91634401116.png" alt="" />
    <h6 className='slider-body'>Pasta</h6>
  </div>
  
  <div className='slider'>
    <img className='slider-head' src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png" alt="" />
    <h6 className='slider-body'>Rolls</h6>
  </div>
  <div className='slider'>
    <img className='slider-head' src="https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png" alt="" />
    <h6 className='slider-body'>Momos</h6>
  </div>
  <div className='slider'>
    <img className='slider-head' src="https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png" alt="" />
    <h6 className='slider-body'>Chaat</h6>
  </div>
  <div className='slider'>
    <img className='slider-head' src="https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png" alt="" />
    <h6 className='slider-body'>Fries</h6>
  </div>
  <div className='slider'>
    <img className='slider-head' src="https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png" alt="" />
    <h6 className='slider-body'>Noodles</h6>
  </div>
  <div className='slider'>
    <img className='slider-head' src="https://b.zmtcdn.com/data/o2_assets/c5f679b7ce4d7cf0b08f120e77d22e2d1632716660.png" alt="" />
    <h6 className='slider-body'>Dal</h6>
  </div>
  <div className='slider'>
    <img className='slider-head' src="https://b.zmtcdn.com/data/o2_assets/c21624eac87ed1c8c87ef1ea52980ded1632716659.png" alt="" />
    <h6 className='slider-body'>Chowmein</h6>
  </div>
 
</Carousel>;
    </div>
  )
}
