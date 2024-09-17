import React, { createContext, useState } from "react";
import TestimonialData from "../data/testimonials.json";
import TanyaImage from "../assets/images/image-tanya.jpg";
import JohnImage from "../assets/images/image-john.jpg";

const TestimonialContext = createContext();

const imageMap = {
  "image-tanya.jpg": TanyaImage,
  "image-john.jpg": JohnImage,
};

function TestimonialProvider({ children }) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % TestimonialData.testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) =>
        (prevIndex - 1 + TestimonialData.testimonials.length) %
        TestimonialData.testimonials.length
    );
  };

  const currentTestimonial = {
    ...TestimonialData.testimonials[currentTestimonialIndex],
    image:
      imageMap[TestimonialData.testimonials[currentTestimonialIndex].image],
  };

  return (
    <TestimonialContext.Provider
      value={{ currentTestimonial, nextTestimonial, prevTestimonial }}
    >
      {children}
    </TestimonialContext.Provider>
  );
}

export { TestimonialContext, TestimonialProvider };
