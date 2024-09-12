import React from "react";
import { Testimonial } from "../Testimonial/Testimonial";
import { TestimonialImage } from "../TestimonialImage/TestimonialImage";
import "./App.css";

function App() {
  return (
    <main className="app">
      <section className="app__section">
        <Testimonial />
        <TestimonialImage />
      </section>
    </main>
  );
}

export default App;
