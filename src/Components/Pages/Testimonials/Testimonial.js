import React from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: "Mammootty",
    title: 'Actor/Producer',
    agency: 'Mammootty Company',
    testimonial: 'Best furnitures in the kerala',
    rating: 5,
    imgSrc: 'https://pbs.twimg.com/profile_images/1649088268355653634/yRnzTnJg_400x400.jpg', 
    bgColor: 'linear-gradient(to right, #ff335f, #f47b)' 
  },
  {
    name: 'Mohanlal',
    title: 'Actor/Director',
    agency: 'Aashirvaad Cinimas',
    testimonial: 'Good Quality, Best Furniture..',
    rating: 4,
    imgSrc: 'https://pbs.twimg.com/profile_images/1659804049993089024/kkdYLpy5_400x400.jpg', 
    bgColor: 'linear-gradient(to right, #56ccf2, #2f80ed)' 
  },
  {
    name: 'Dulquer Salmaan',
    title: 'Actor/Producer',
    agency: 'Wayfarer Films',
    testimonial: 'Amazing designs, highly recommended!',
    rating: 5,
    imgSrc: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/dulquer-salmaan-37626-19-09-2017-04-04-09.jpg', 
    bgColor: 'linear-gradient(to right, #ffafbd, #ffc3a0)' 
  },
  {
    name: 'Prithviraj Sukumaran',
    title: 'Director/Actor/Producer',
    agency: 'Prithviraj Productions',
    testimonial: 'Fabulous craftsmanship and service.',
    rating: 5,
    imgSrc: 'https://i.redd.it/vv1lhlz6i1ta1.jpg', 
    bgColor: 'linear-gradient(to right, #a1c4fd, #c2e9fb)' 
  },
  {
    name: 'Nivin Pauly',
    title: 'Actor',
    agency: 'Pauly & Co.',
    testimonial: 'Great value for money!',
    rating: 4,
    imgSrc: 'https://www.gethucinema.com/wp-content/uploads/2022/01/NivinPauly-120-300x300.jpg', 
    bgColor: 'linear-gradient(to right, #f953c6, #b91d73)' 
  },
  {
    name: 'Tovino Thomas',
    title: 'Actor/Producer',
    agency: 'Tovino Pictures',
    testimonial: 'Truly the best in the market!',
    rating: 5,
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiSY7IB6kJvCRJ23A6DoW2aVnLPlPYfHNsSA&s', 
    bgColor: 'linear-gradient(to right, #ffecd2, #fcb69f)' 
  },
  {
    name: 'Fahadh Faasil',
    title: 'Actor',
    agency: 'Faasil & Friends',
    testimonial: 'Exceeds expectations every time!',
    rating: 5,
    imgSrc: 'https://scontent.fccj6-1.fna.fbcdn.net/v/t39.30808-1/328516885_1232991990962838_2754861197603716309_n.jpg?stp=c0.0.1080.1080a_dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=TVmQ5X86bYEQ7kNvgHozp81&_nc_ht=scontent.fccj6-1.fna&_nc_gid=A-Pbxu7O7LgFZXJDgJplL0m&oh=00_AYAUL4I12vlqIiIHxZf6_H_z6gKsHiH0f-VUrLEOJ-GzHQ&oe=670976D2', 
    bgColor: 'linear-gradient(to right, #c3ec52, #0ba29d)' 
  },
  {
    name: 'Soubin Shahir',
    title: 'Actor/Director',
    agency: 'Soubin Creations',
    testimonial: 'Incredible quality and finish.',
    rating: 4,
    imgSrc: 'https://c.saavncdn.com/artists/Soubin_Shahir_002_20230810091305_500x500.jpg', 
    bgColor: 'linear-gradient(to right, #43e97b, #38f9d7)' 
  },
  {
    name: 'Jayaram',
    title: 'Actor',
    agency: 'Jayaram Productions',
    testimonial: 'Comfort meets style, love it!',
    rating: 5,
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbtUxuSG1K-jZMbq7_yYX_DA3eUBzDver_Q&s', 
    bgColor: 'linear-gradient(to right, #ff9966, #ff5e62)' 
  },
  {
    name: 'Asif Ali',
    title: 'Actor',
    agency: 'Ali & Co.',
    testimonial: 'Beautiful designs and finish!',
    rating: 4,
    imgSrc: 'https://scontent.fccj6-1.fna.fbcdn.net/v/t39.30808-1/274143101_499721184848457_3023243237915244132_n.jpg?stp=dst-jpg_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=IfMhhUnlIDcQ7kNvgG60_1i&_nc_ht=scontent.fccj6-1.fna&_nc_gid=ASurGmiUkO2lu3MxtVJCf3P&oh=00_AYBS7X_fUjHy-V3uFYMe7ZvRuh2Gu9voW-YA6Str_kuT4Q&oe=6709889A', 
    bgColor: 'linear-gradient(to right, #d4fc79, #96e6a1)' 
  },
  {
    name: "Dileep",
    title: 'Actor/Producer',
    agency: 'Graand Production',
    testimonial: 'Best furnitures in the kerala',
    rating: 5,
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9drpKDlkaxQ5jGOuTEvpha1ZMXeqxO9o9JA&s', 
    bgColor: 'linear-gradient(to right, #ff335f, #f47b)' 
  },
  {
    name: 'Vineeth Sreenivasan',
    title: 'Singer/Director',
    agency: 'Habib Entertainments',
    testimonial: 'Top-notch and durable!',
    rating: 5,
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGFkZ7C6ZCjgOFXsdj4sMfzfWU1yw1oR5dAw&s', 
    bgColor: 'linear-gradient(to right, #56ab2f, #a8e063)' 
  },
  {
    name: 'Kunchacko Boban',
    title: 'Producer/Actor',
    agency: 'Boban Productions',
    testimonial: 'The best in terms of quality!',
    rating: 5,
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQxBPtB31yaUL1hQXUNhUshryT7ixEMlkRQ&s', 
    bgColor: 'linear-gradient(to right, #667eea, #764ba2)' 
  },
  {
    name: 'Suraj Venjaramoodu',
    title: 'Actor',
    agency: 'Suraj Enterprises',
    testimonial: 'Worth every penny!',
    rating: 4,
    imgSrc: 'https://scontent.fccj6-1.fna.fbcdn.net/v/t39.30808-6/462005301_2431577690386210_7984364610982381413_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=UHt7X4sipIwQ7kNvgFBlIzf&_nc_ht=scontent.fccj6-1.fna&_nc_gid=AOuU3nIlc__owjdKLc0LXgV&oh=00_AYDh_cIasDIr99iIvs4XD1isMPJwDL-PoZiJqj2uOtfZYg&oe=6709912B', 
    bgColor: 'linear-gradient(to right, #b24592, #f15f79)' 
  },
  

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
