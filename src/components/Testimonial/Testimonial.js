import React from "react";
import Data from "../../data/testimonials.json";
import "./Testimonial.css";

function Testimonial() {
  // Extraer datos de testimonios del archivo JSON
  const testimonial = Data.testimonials[0];

  return (
    <article className="testimonial">
      <p className="testimonial__text">{testimonial.testimonial}</p>
      <div className="testimonial__author-info">
        <span className="testimonial__author">{testimonial.author}</span>
        <span className="testimonial__position">{testimonial.position}</span>
      </div>
    </article>
  );
}

export { Testimonial };