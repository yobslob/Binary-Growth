import React, { useEffect } from 'react';

const reviews = [
    {
        video: "https://player.vimeo.com/video/1000470121?title=0&byline=0&portrait=0&badge=0&loop=1&quality=1080p", // Sample video URL
        quote: "His Attention to details, creativity and ability to understand my vision are unmatched.",
        reviewer: "Ankit Arora",
        company: "",
    },
    {
        video: "https://player.vimeo.com/video/1110559939?title=0&byline=0&portrait=0&badge=0&loop=1&quality=1080p", // Sample video URL
        quote: "We've seen an exponential growth which is bringing in consistent leads.",
        reviewer: "Alec Burcham",
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
            {/* Local styles for minimal, smooth animations and refined card texture. */}
            <style>{`
                /* subtle fade+slide up used on load */
                @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }

                .review-grid { display: grid; gap: 2.5rem; width: 100%; max-width: 64rem; }
                @media (min-width: 768px) { .review-grid { grid-template-columns: 1fr; } }

                .review-card {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    padding: 1.25rem;
                    border-radius: 1rem;
                    border: 1px solid rgba(255,255,255,0.04);
                    backdrop-filter: blur(6px);
                    transition: transform 400ms cubic-bezier(.2,.9,.2,1), box-shadow 300ms ease, border-color 300ms ease;
                    will-change: transform;
                    animation: fadeUp 480ms ease forwards;
                    opacity: 0; /* animated to 1 by keyframe */
                    background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.00));
                }

                .review-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 12px 30px rgba(12,16,24,0.45);
                    border-color: rgba(255,255,255,0.06);
                }

                .video-wrap {
                    position: relative;
                    width: 100%;
                    border-radius: 0.75rem;
                    overflow: hidden;
                    aspect-ratio: 16/9;
                    box-shadow: 0 6px 18px rgba(2,6,23,0.35) inset;
                    border: 1px solid rgba(255,255,255,0.03);
                    transform-origin: center;
                    transition: transform 450ms cubic-bezier(.2,.9,.2,1);
                }

                .review-card:hover .video-wrap { transform: scale(1.01); }

                .video-frame {
                    width: 100%;
                    height: 100%;
                    border: 0;
                    display: block;
                }

                .review-text {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 0.5rem;
                    text-align: left;
                }

                .quote {
                    color: rgba(225,225,230,0.9);
                    font-style: italic;
                    line-height: 1.45;
                    font-weight: 600;
                    letter-spacing: -0.2px;
                    margin: 0;
                }

                .reviewer {
                    color: #9f5dfd; /* keep existing accent */
                    font-weight: 700;
                    margin-top: 0.25rem;
                    font-size: 0.92rem;
                }

                /* small animated accent bar under reviewer name */
                .reviewer::after {
                    content: '';
                    display: block;
                    height: 3px;
                    width: 36px;
                    margin-top: 8px;
                    border-radius: 99px;
                    background: linear-gradient(90deg, rgba(159,93,253,0.95), rgba(159,93,253,0.6));
                    transform-origin: left center;
                    transform: scaleX(0);
                    transition: transform 420ms cubic-bezier(.2,.9,.2,1) 150ms;
                }

                .review-card:hover .reviewer::after { transform: scaleX(1); }

                /* small responsive tweaks */
                @media (min-width: 768px) {
                    .review-card { flex-direction: row; align-items: center; gap: 1.25rem; }
                    .video-wrap { width: 48%; }
                    .review-text { width: 52%; }
                }

            `}</style>

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
            <div className="review-grid">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="review-card"
                        style={{ animationDelay: `${index * 140}ms` }}
                    >
                        {/* Video */}
                        <div className="video-wrap">
                            <iframe
                                src={review.video}
                                title={`Review Video ${index + 1}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="video-frame"
                            ></iframe>
                        </div>

                        {/* Text */}
                        <div className="review-text">
                            <p className="quote">“{review.quote}”</p>
                            <p className="reviewer">{review.reviewer} <span style={{ fontWeight: 400, color: 'rgba(225,225,230,0.8)', marginLeft: 6 }}>{review.company}</span></p>
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
