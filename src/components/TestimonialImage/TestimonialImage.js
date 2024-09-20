import React, { useContext } from "react";
import { TestimonialContext } from "../../context/TestimonialContext";
import { ReactComponent as IconPrev } from "../../assets/images/icon-prev.svg";
import { ReactComponent as IconNext } from "../../assets/images/icon-next.svg";
import "./TestimonialImage.css";

// Component that displays the image of a testimonial and allows you to navigate between them.
function TestimonialImage() {
  // We access the Testimonial context and obtain the functions to navigate between testimonials.
  const { currentTestimonial, nextTestimonial, prevTestimonial } =
    useContext(TestimonialContext);

  return (
    <div className="testimonialImage">
      <figure className="testimonialImage__figure">
        <img
          className="testimonialImage__img"
          src={currentTestimonial.image}
          alt={currentTestimonial.author}
        />
      </figure>
      <div className="testimonialImage__container">
        <div className="testimonialImage__controls">
          <div
            className="testimonialImage__control testimonialImage__control--prev"
            onClick={prevTestimonial}
          >
            <IconPrev className="testimonialImage__icon" />
          </div>
          <div
            className="testimonialImage__control testimonialImage__control--next"
            onClick={nextTestimonial}
          >
            <IconNext className="testimonialImage__icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { TestimonialImage };
