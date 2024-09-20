import React, { useContext } from "react";
import { TestimonialContext } from "../../context/TestimonialContext";
import "./Testimonial.css";

// Component that displays a testimony.
function Testimonial() {
  // Gets the current testimony from the Testimonial Context.
  const { currentTestimonial } = useContext(TestimonialContext);

  return (
    <article className="testimonial">
      <p className="testimonial__text">{currentTestimonial.testimonial}</p>
      <div className="testimonial__author-info">
        <span className="testimonial__author">{currentTestimonial.author}</span>
        <span className="testimonial__position">
          {currentTestimonial.position}
        </span>
      </div>
    </article>
  );
}

export { Testimonial };
