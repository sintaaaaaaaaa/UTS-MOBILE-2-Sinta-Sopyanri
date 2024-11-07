import React from 'react';
import Image from 'next/image'; // Import Image dari Next.js
import sleeping from '../assets/sleeping.jpg';
import photography from '../assets/photography.jpg';
import movie from '../assets/movie.jpg';
import journaling from '../assets/journaling.jpg';
import './hobbies.css'; // Import file CSS untuk styling

const MyGallery = () => {
  const Hobbies = [
    { name: "Sleeping", image: sleeping },
    { name: "Photography", image: photography },
    { name: "Movies", image: movie },
    { name: "Journaling", image: journaling },
  ];

  return (
    <section className="gallery-container">
      <h2 className="text-2xl font-bold mb-4">Hobbies</h2>
      <div className="gallery">
        {Hobbies.map((hobby, index) => (
          <div key={index} className="gallery-card">
            <Image src={hobby.image} alt={hobby.name} className="gallery-image" layout="responsive" width={150} height={100} />
            <div className="gallery-caption">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyGallery;