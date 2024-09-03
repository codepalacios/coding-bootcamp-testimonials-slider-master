import React from "react";
import Data from "../../data/testimonials.json";
import TanyaImage from "../../assets/images/image-tanya.jpg";
import JohnImage from "../../assets/images/image-john.jpg";
import { ReactComponent as IconPrev } from "../../assets/images/icon-prev.svg";
import { ReactComponent as IconNext } from "../../assets/images/icon-next.svg";
import "./TestimonialImage.css";

function TestimonialImage() {
  // Extraer datos de testimonios del archivo JSON
  const testimonial = Data.testimonials[0];

  return (
    <div className="testimonialImage">
      <figure className="testimonialImage__figure">
        <img
          className="testimonialImage__img"
          src={TanyaImage}
          alt={testimonial.author}
        />
      </figure>
      <div className="testimonialImage__container">
        <div className="testimonialImage__controls">
          <div className="testimonialImage__control">
            <IconPrev className="testimonialImage__icon" />
          </div>
          <div className="testimonialImage__control">
            <IconNext className="testimonialImage__icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { TestimonialImage };
