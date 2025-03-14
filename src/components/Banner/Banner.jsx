import React from 'react';
import Family from '../../assets/Family.jpg';

const Banner = () => {
    return (
        <div
            className="hero p-4 sm:p-6 md:p-12 lg:p-20 mb-10 min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh]"
            style={{
                backgroundImage: `url(${Family})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
                    <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                        Welcome to Movie Portal
                    </h1>
                    <p className="mb-5 text-xs sm:text-sm md:text-base lg:text-lg">
                        Where entertainment never stops! Discover the latest blockbusters, timeless classics, 
                        and binge-worthy TV shows, all in one place. Stay updated with reviews, ratings, 
                        and the hottest trends in cinema.
                    </p>
                    <button className="btn btn-primary px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-base">
                        Explore More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
