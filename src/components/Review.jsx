import React, { useEffect, useRef } from 'react';

const reviews = [
    {
        video: "https://player.vimeo.com/video/1000470121?title=0&byline=0&portrait=0&badge=0&loop=1&quality=1080p",
        quote: "His Attention to details, creativity and ability to understand my vision are unmatched.",
        reviewer: "Ankit Arora",
        company: "",
    },
    {
        video: "https://player.vimeo.com/video/1110559939?title=0&byline=0&portrait=0&badge=0&loop=1&quality=1080p",
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
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const cards = Array.from(container.querySelectorAll('.reviews-card'));

        // Respect prefers-reduced-motion
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // IntersectionObserver: reveal when card enters viewport
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const el = entry.target;
                    if (entry.isIntersecting) {
                        el.classList.add('in-view');
                        // once revealed, unobserve for performance
                        obs.unobserve(el);
                    }
                });
            },
            { threshold: 0.18 }
        );

        cards.forEach((card, i) => {
            // stagger delay stored in CSS variable
            card.style.setProperty('--reveal-delay', `${i * 120}ms`);
            obs.observe(card);

            // add tilt effect only if not reduced
            if (!reduced) {
                let frame = null;
                const inner = card.querySelector('.reviews-inner');

                function onMove(e) {
                    const rect = card.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    const tiltX = (y * 8).toFixed(2);
                    const tiltY = (x * -12).toFixed(2);

                    if (frame) cancelAnimationFrame(frame);
                    frame = requestAnimationFrame(() => {
                        inner.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(6px)`;
                    });
                }

                function onLeave() {
                    if (frame) cancelAnimationFrame(frame);
                    inner.style.transition = 'transform 520ms cubic-bezier(.2,.9,.2,1)';
                    inner.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
                    setTimeout(() => { inner.style.transition = ''; }, 520);
                }

                card.addEventListener('mousemove', onMove);
                card.addEventListener('mouseleave', onLeave);

                // cleanup
                card._cleanup = () => {
                    card.removeEventListener('mousemove', onMove);
                    card.removeEventListener('mouseleave', onLeave);
                };
            }
        });

        return () => {
            obs.disconnect();
            cards.forEach(c => c._cleanup && c._cleanup());
        };
    }, []);

    return (
        <section
            id="reviews"
            className="min-h-screen gradient-bg text-white flex flex-col items-center justify-center py-12 md:py-20 px-4 md:px-8"
        >
            {/* Scoped styles focused only on reviews; selectors are prefixed to avoid affecting other parts like Calendly. */}
            <style>{`
                /* container scope */
                #reviews .reviews-grid { width: 100%; max-width: 64rem; display: grid; gap: 2.25rem; }

                /* card base */
                #reviews .reviews-card {
                    --card-bg: rgba(255,255,255,0.01);
                    background: linear-gradient(180deg, var(--card-bg), rgba(255,255,255,0));
                    border-radius: 1rem;
                    padding: 1rem;
                    border: 1px solid rgba(255,255,255,0.03);
                    overflow: visible;
                    will-change: transform, opacity;
                    transform-origin: center;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                /* inner surface receives tilt transform; keep children independent for smoother 3D */
                #reviews .reviews-inner {
                    border-radius: 0.75rem;
                    background-clip: padding-box;
                    will-change: transform;
                    transform-style: preserve-3d;
                    transition: box-shadow 320ms ease, transform 320ms cubic-bezier(.2,.9,.2,1);
                    box-shadow: 0 6px 18px rgba(2,6,23,0.25) inset;
                    padding: 0.5rem;\                }

                /* video container: layered for parallax */
                #reviews .video-layer {
                    position: relative;
                    border-radius: 0.6rem;
                    overflow: hidden;
                    aspect-ratio: 16/9;
                    transform-origin: center;
                    background: rgba(0,0,0,0.25);
                    box-shadow: 0 8px 30px rgba(2,6,23,0.45) inset;
                }

                #reviews .video-frame {
                    width: 100%;
                    height: 100%;
                    display: block;
                    border: 0;
                    transform-origin: center;
                    transition: transform 560ms cubic-bezier(.2,.9,.2,1), opacity 420ms linear;
                    will-change: transform, opacity;
                    transform: scale(1.02) translateZ(0);
                    opacity: 0.98;
                }

                /* text area */
                #reviews .reviews-text { display:flex; flex-direction:column; gap:0.5rem; }
                #reviews .quote { font-style: italic; color: rgba(225,225,230,0.92); line-height:1.45; font-weight:600; }
                #reviews .reviewer { color: #9f5dfd; font-weight:700; }

                /* in-view reveal animation: subtle scale + fade + blur->clear */
                #reviews .reviews-card {
                    opacity: 0; transform: translateY(18px) scale(0.995);
                    filter: blur(6px) saturate(.95);
                }

                #reviews .reviews-card.in-view {
                    animation: cardReveal 720ms cubic-bezier(.16,.9,.2,1) var(--reveal-delay) both;
                }

                @keyframes cardReveal {
                    0% { opacity: 0; transform: translateY(18px) scale(0.995); filter: blur(6px) saturate(.95); }
                    60% { opacity: 1; transform: translateY(-6px) scale(1.001); filter: blur(2px) saturate(1.02); }
                    100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0px) saturate(1); }
                }

                /* subtle parallax on hover: video moves slightly, vignette appears */
                #reviews .reviews-card.in-view:hover .video-frame { transform: scale(1.06) translateY(-6px) rotateZ(0.01deg); }
                #reviews .reviews-card.in-view:hover { box-shadow: 0 18px 50px rgba(2,6,23,0.52); }

                /* reviewer underline reveal */
                #reviews .reviewer::after {
                    content: '';
                    display:block;
                    height:3px; width:36px; margin-top:8px; border-radius:99px;
                    background: linear-gradient(90deg, rgba(159,93,253,0.95), rgba(159,93,253,0.6));
                    transform-origin: left center; transform: scaleX(0); transition: transform 420ms cubic-bezier(.2,.9,.2,1) 120ms;
                }
                #reviews .reviews-card.in-view:hover .reviewer::after { transform: scaleX(1); }

                /* layout tweaks for larger screens */
                @media (min-width: 768px) {
                    #reviews .reviews-card { flex-direction: row; align-items: center; gap: 1.25rem; }
                    /* Increased video width so embedded video appears larger on desktop */
                    #reviews .video-layer { width: 60%; }
                    /* Move text block to the right and keep it compact */
                    #reviews .reviews-text { width: 40%; text-align: left; }
                }
                    #reviews .video-layer { width: 46%; }
                    #reviews .reviews-text { width: 54%; }
                }

                /* accessibility: reduce motion stops transforms/transitions */
                @media (prefers-reduced-motion: reduce) {
                    #reviews .reviews-card, #reviews .video-frame, #reviews .reviews-inner { transition: none !important; animation: none !important; transform: none !important; }
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
            <div ref={containerRef} className="reviews-grid">
                {reviews.map((review, index) => (
                    <article
                        key={index}
                        className="reviews-card"
                        style={{ '--reveal-delay': `${index * 120}ms` }}
                        aria-labelledby={`review-${index}-author`}
                    >
                        <div className="reviews-inner">
                            <div className="video-layer">
                                <iframe
                                    src={review.video}
                                    title={`Review Video ${index + 1}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="video-frame"
                                ></iframe>
                            </div>

                            <div className="reviews-text">
                                <p className="quote">“{review.quote}”</p>
                                <p id={`review-${index}-author`} className="reviewer">{review.reviewer} <span style={{ fontWeight: 400, color: 'rgba(225,225,230,0.8)', marginLeft: 6 }}>{review.company}</span></p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Booking Section - left unchanged from original (no logic or layout changes). */}
            <BookingContent />
        </section>
    );
};

export default Review;
