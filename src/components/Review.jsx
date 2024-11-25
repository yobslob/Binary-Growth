import React from "react";

const reviews = [
    {
        video: "https://www.w3schools.com/html/mov_bbb.mp4", // Sample video URL
        quote: "This service has transformed our workflow and exceeded expectations!",
        reviewer: "John Doe",
        company: "Tech Solutions Inc.",
    },
    {
        video: "https://www.w3schools.com/html/movie.mp4", // Sample video URL
        quote: "Incredible experience! Highly recommend to anyone looking for quality.",
        reviewer: "Jane Smith",
        company: "Creative Studios",
    },
    // Add more reviews as needed
];

const Review = () => {
    return (
        <section
            id="reviews"
            className="min-h-screen gradient-bg text-white flex flex-col items-center justify-center py-20 px-8"
        >
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Reviews</h2>
                <p className="text-lg lg:text-xl text-gray-400">
                    Hear what our clients have to say about us.
                </p>
            </div>

            {/* Reviews */}
            <div className="space-y-12 w-full max-w-5xl">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="flex flex-col lg:flex-row items-center lg:items-start bg-gray-800 rounded-lg p-6 gap-8"
                    >
                        {/* Video */}
                        <div className="flex-shrink-0 w-full lg:w-1/2">
                            <video
                                src={review.video}
                                controls
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Text */}
                        <div className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left">
                            <p className="text-lg italic text-gray-300 mb-4">
                                “{review.quote}”
                            </p>
                            <p className="text-gray-400 font-bold">
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
