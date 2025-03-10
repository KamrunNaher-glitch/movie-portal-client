import React from 'react';
import about from '../../assets/about.png'
const AboutUs = () => {
    return (
        <div className="hero bg-base-200 p-20">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={about}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">About Movie Portal!</h1>
      <p className="py-6">
      we believe entertainment should be convenient, enjoyable, and accessible. Our platform lets you watch movies online without hassle. Whether you're in the mood for a thrilling action film, a heartwarming drama, or the latest binge-worthy TV series, we've got you covered!
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default AboutUs;


