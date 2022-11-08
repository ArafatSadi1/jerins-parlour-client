import React from 'react';
import review1 from "../../../Image_Icon/Image/Ellipse 90.png"
import review2 from "../../../Image_Icon/Image/Ellipse 91.png"
import review3 from "../../../Image_Icon/Image/Ellipse 92.png"
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
          _id: 1,
          image: review1,
          name: "Nash Patrik",
          position: "CEO, manpol",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum sit at labore ducimus dolores dolorum voluptas? Natus, quas quis.",
        },
        {
          _id: 2,
          image: review2,
          name: "Miriam Barron",
          position: "CEO, manpol",
          text:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum sit at labore ducimus dolores dolorum voluptas? Natus, quas quis.",
        },
        {
            _id: 3,
            image: review3,
            name: "Bria Malone",
            position: "CEO, manpol",
            text:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum sit at labore ducimus dolores dolorum voluptas? Natus, quas quis.",
          },
        ];
    
    return (
        <div className='pt-20 pb-16 lg:px-8'>
            <h2 className='text-3xl text-center font-bold mb-12'>Testimonials</h2>
            <div className='flex flex-col lg:flex-row gap-12 lg:mx-12'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
            <div className='text-center mt-10'>
                <input type="text" className='bg-slate-800 w-2 h-2 rounded-full' />
                <input type="text" className='bg-slate-400 w-2 h-2 rounded-full mx-2' />
                <input type="text" className='bg-slate-400 w-2 h-2 rounded-full' />
            </div>
        </div>
    );
};

export default Testimonials;