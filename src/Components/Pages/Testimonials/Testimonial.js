import React from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: "Mammootty",
    title: 'CEO',
    agency: 'Mammootty Company',
    testimonial: 'Best furniture in the town',
    rating: 5,
    imgSrc: 'https://pbs.twimg.com/profile_images/1649088268355653634/yRnzTnJg_400x400.jpg', 
    bgColor: 'linear-gradient(to right, #ff335f, #f47b)' 
  },
  {
    name: 'Prithviraj Sukumaran',
    title: 'Founder',
    agency: 'Prithviraj Production',
    testimonial: 'Good Quality, Best Furniture..',
    rating: 4,
    imgSrc: 'https://preview.redd.it/why-does-subs-like-malayalammovies-hate-prithviraj-v0-vv1lhlz6i1ta1.jpg?width=640&crop=smart&auto=webp&s=3271437c43381d7fbb3afcb895129f9382e87ca9', 
    bgColor: 'linear-gradient(to right, #56ccf2, #2f80ed)' 
  }
];

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-card" style={{ background: testimonial.bgColor }}>
          <div className="testimonial-header">
            <h1 className='test-heading'>Client Testimonial</h1>
            <img src={testimonial.imgSrc} alt={testimonial.name} className="testimonial-image" />
            <h2 className="testimonial-name">{testimonial.name}</h2>
            <p className="testimonial-title">{testimonial.title}, {testimonial.agency}</p>
            <div className="testimonial-rating">
              {'★'.repeat(testimonial.rating)}
            </div>
          </div>
          <div className="testimonial-content">
            <p>{testimonial.testimonial}</p>
          </div>
          <button className="learn-more-btn">Learn More</button>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
