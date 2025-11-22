import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import test from "../../Assets/testimonials/test.png";
import test1 from "../../Assets/testimonials/test1.png";
import test2 from "../../Assets/testimonials/test2.png";
import test3 from "../../Assets/testimonials/test3.png";
import test4 from "../../Assets/testimonials/test4.png";

const testimonials = [
  {
    id: 1,
    src: test,
  },
  {
    id: 2,
    src: test1,
  },
  {
    id: 3,
    src: test2,
  },
  {
    id: 4,
    src: test3,
  },
  {
    id: 5,
    src: test4,
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="w-full bg-gray-200 max-w-screen-xl mx-auto p-4">
      <Carousel
        showArrows={true}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="h-2/5 p-12 rounded-lg shadow-lg">
            <div>
              <img
                src={testimonial.src}
                alt="testimonial images"
                className="rounded-lg w-[20%] h-[15%]"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
