import React, { useEffect } from 'react';

const reviews = [
    {
        video: "https://player.vimeo.com/video/1000470121?title=0&byline=0&portrait=0&badge=0&loop=1&quality=1080p", // Sample video URL
        quote: "His Attention to details, creativity and ability to understand my vision are unmatched.",
        reviewer: "Ankit Arora",
        company: "",
    },
    {
        video: "https://player.vimeo.com/video/1047637989?title=0&byline=0&portrait=0&badge=0&loop=1&quality=1080p", // Sample video URL
        quote: "Never worked with a guy with such clearity and quick working process.",
        reviewer: "Somrat Dutta",
        company: "",
    },
];

const BookingContent = () => {
    useEffect(() => {
        // Dynamically load Calendly widget script
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup the script on unmount
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="booking" className="booking-content flex flex-col max-w-full items-center p-4 md:p-6">
            <h1 className="booking-heading text-3xl md:text-4xl font-bold text-center mt-32 md:mt-64 mb-4 md:mb-8">
                Book a Call
            </h1>
            <p className="booking-subheading text-sm md:text-lg text-gray-500 font-medium text-center mb-4 md:mb-8 px-8 lg:px-96">
                Let's talk about how we can grow your business
            </p>
            <div
                className="calendly-inline-widget w-full h-[700px] md:w-[700px] md:h-[700px] lg:w-[1000px] lg:h-[700px]"
                data-url="https://calendly.com/yogeshxiix/30min?hide_gdpr_banner=1&primary_color=9f5dfd"
            ></div>
        </div >
    );
};

const Review = () => {
    return (
        <section
            id="reviews"
            className="min-h-screen gradient-bg text-white flex flex-col items-center justify-center py-12 md:py-20 px-4 md:px-8"
        >
            {/* Heading */}
            <div className="text-center mb-8 md:mb-12">
                <h4 className="text-lg md:text-2xl lg:text-4xl text-testPurple font-bold mb-4">
                    Testimonials
                </h4>
                <p className="text-base md:text-lg lg:text-xl text-gray-300 font-medium">
                    Hear What our Clients have to say about us.
                </p>
            </div>

            {/* Reviews */}
            <div className="space-y-16 md:space-y-32 w-full max-w-4xl">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center md:items-start bg-transparent rounded-xl p-4 md:p-6 gap-4"
                    >
                        {/* Video */}
                        <div className="flex-shrink-0 w-full md:w-1/2">
                            <iframe
                                src={review.video}
                                title={`Review Video ${index + 1}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-48 md:h-56 rounded-lg"
                            ></iframe>
                        </div>

                        {/* Text */}
                        <div className="flex flex-col pt-2 md:pt-4 pr-0 md:pr-8 justify-center w-full text-center md:text-left">
                            <p className="text-sm md:text-lg italic text-gray-300 font-semiBold">
                                “{review.quote}”
                            </p>
                            <p className="text-testPurple mt-2 text-xs md:text-sm font-semiBold">
                                {review.reviewer} <span className="font-normal">{review.company}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Booking Section */}
            <BookingContent />
        </section>
    );
};

export default Review;
