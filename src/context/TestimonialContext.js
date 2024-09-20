import React, { createContext, useState } from "react";
import TestimonialData from "../data/testimonials.json";
import TanyaImage from "../assets/images/image-tanya.jpg";
import JohnImage from "../assets/images/image-john.jpg";

// We created a context to share testimonial data between components.
const TestimonialContext = createContext();

// We create an image map to associate file names with imported images.
const imageMap = {
  "image-tanya.jpg": TanyaImage,
  "image-john.jpg": JohnImage,
};

// We created a context provider for the testimonials.
function TestimonialProvider({ children }) {
  // We create a state to store the current index of the testimony.
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // We created a function to advance to the next testimony.
  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % TestimonialData.testimonials.length
    );
  };

  // We created a function to go back to the previous testimony.
  const prevTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) =>
        (prevIndex - 1 + TestimonialData.testimonials.length) %
        TestimonialData.testimonials.length
    );
  };

  // We create an object that represents the current testimony.
  const currentTestimonial = {
    ...TestimonialData.testimonials[currentTestimonialIndex],
    image:
      imageMap[TestimonialData.testimonials[currentTestimonialIndex].image],
  };

  // We return the context provider with the values ​​that will be shared between components.
  return (
    <TestimonialContext.Provider
      value={{ currentTestimonial, nextTestimonial, prevTestimonial }}
    >
      {children}
    </TestimonialContext.Provider>
  );
}

export { TestimonialContext, TestimonialProvider };
