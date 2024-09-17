import React from "react";
import { TestimonialProvider } from "../../context/TestimonialContext";
import { Testimonial } from "../../components/Testimonial/Testimonial";
import { TestimonialImage } from "../../components/TestimonialImage/TestimonialImage";
import "./App.css";

function App() {
  return (
    <TestimonialProvider>
      <main className="app">
        <section className="app__section">
          <Testimonial />
          <TestimonialImage />
        </section>
      </main>
    </TestimonialProvider>
  );
}

export default App;
