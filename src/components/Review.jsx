import React, { useEffect } from 'react';

const reviews = [
    {
        video: "https://player.vimeo.com/video/1000470121?title=0&byline=0&portrait=0&badge=0&loop=1&quality=1080p", // Sample video URL
        quote: "His Attention to details, creativity and ability to understand my vision are unmatched.",
        reviewer: "Ankit Arora",
        company: "",
    },
    {
        video: "https://player.vimeo.com/video/1000470121?title=0&byline=0&portrait=0&badge=0&loop=1&quality=1080p", // Sample video URL
        quote: "This service has transformed our workflow and exceeded expectations!",
        reviewer: "Jane Smith, ",
        company: "Innovate LLC",
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
        <div className="booking-content flex flex-col items-center p-6">
            <h1 className="booking-heading text-4xl font-bold text-center mt-64 mb-8">Book a Call</h1>
            <p className="booking-subheading text-lg text-gray-500 font-medium text-center mb-8">
                Let's talk about how we can grow your business
            </p>
            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/yogeshxiix/30min?hide_gdpr_banner=1&primary_color=9f5dfd"
                style={{ minWidth: '1220px', height: '700px' }}
            ></div>
        </div>
    );
};

const Review = () => {
    return (
        <section
            id="reviews"
            className="min-h-screen gradient-bg text-white flex flex-col items-center justify-center py-20 px-8"
        >
            {/* Heading */}
            <div className="text-center mb-12">
                <h4 className="text-md lg:text-4xl text-testPurple font-bold m-8">Testimonials</h4>
                <p className="text-xl lg:text-xl text-grey-300 mb-24 font-medium">
                    Hear What our Clients have to say about us.
                </p>
            </div>

            {/* Reviews */}
            <div className="space-y-64 w-full max-w-6xl">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="flex flex-col lg:flex-row items-center lg:items-start bg-transparent rounded-xl p-6 gap-2"
                    >
                        {/* Video */}
                        <div className="flex-shrink-0 w-md lg:w-1/2">
                            <iframe
                                src={review.video}
                                title={`Review Video ${index + 1}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-56 rounded-lg"
                            ></iframe>
                        </div>

                        {/* Text */}
                        <div className="flex flex-col pt-4 pr-12 justify-center w-full lg:w-1/2 text-center lg:text-left">
                            <p className="text-xl italic text-grey-300 font-semiBold mt-12">
                                “{review.quote}”
                            </p>
                            <p className="text-testPurple mt-2 text-sm font-semiBold">
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
