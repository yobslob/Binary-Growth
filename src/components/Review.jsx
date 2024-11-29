import React from "react";

const reviews = [
    {
        video: "https://player.vimeo.com/video/1000470121?title=0&byline=0&portrait=0&badge=0&loop=1&quality=1080p", // Sample video URL
        quote: "This service has transformed our workflow and exceeded expectations!",
        reviewer: "John Doe",
        company: "Tech Solutions Inc.",
    },
    {
        video: "https://player.vimeo.com/video/1000470121?title=0&byline=0&portrait=0&badge=0&loop=1&quality=1080p", // Sample video URL
        quote: "This service has transformed our workflow and exceeded expectations!",
        reviewer: "John Doe",
        company: "Tech Solutions Inc.",
    },
];

const Review = () => {
    return (
        <section
            id="reviews"
            className="min-h-screen gradient-bg text-white flex flex-col items-center justify-center py-20 px-8"
        >
            {/* Heading */}
            <div className="text-center mb-12">
                <h4 className="text-md lg:text-lg text-testPurple font-bold m-8">Testimonials</h4>
                <p className="text-xl lg:text-3xl text-grey-300 mb-24 font-bold">
                    What our Clients have to say.
                </p>
            </div>

            {/* Reviews */}
            <div className="space-y-36 w-full max-w-5xl">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="flex flex-col lg:flex-row items-center lg:items-start bg-transparent rounded-xl p-6 rounded-lg gap-8"
                    >
                        {/* Video */}
                        <div className="flex-shrink-0 w-md lg:w-1/2">
                            <iframe
                                src="https://player.vimeo.com/video/1000470121?title=0&byline=0&portrait=0&badge=0&loop=1&quality=1080p"
                                title="Reel 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-96 h-56 rounded-xl"
                            ></iframe>

                        </div>

                        {/* Text */}
                        <div className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left">
                            <p className="text-xl italic text-grey-300 font-semiBold mt-12">
                                “{review.quote}”
                            </p>
                            <p className="text-testPurple mt-2 text-sm font-semiBold">
                                {review.reviewer}, <span className="font-normal">{review.company}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Review;
