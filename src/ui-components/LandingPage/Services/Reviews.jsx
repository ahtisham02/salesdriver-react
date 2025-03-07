import React from "react";
import img1 from "../../../assets/user3.jpeg";
import img2 from "../../../assets/user4.jpeg";
import img3 from "../../../assets/user5.jpeg";

const testimonials = [
  {
    text: (
      <>
        <strong>SalesDriver</strong> introduced us to technologies we could only dream of, saving us both time and money. When it comes to <strong>automation</strong> and <strong>AI</strong> they know what they’re doing.
      </>
    ),
    name: "Carmen H",
    title: "Chief Operating Officer",
    image: img1,
  },
  {
    text: (
      <>
        So refreshing to work with a team that really, truly, <strong>understands</strong> the problems <strong>agencies</strong> face and has the solutions to overcome them.
      </>
    ),
    name: "David D",
    title: "Senior Project Manager",
    image: img2,
  },
  {
    text: (
      <>
        They are <strong>SalesDriver</strong>....They Drive Sales. <strong>Thank you SalesDriver</strong> team, it is nice to have a calendar full of real appointments that actually convert into sales.
      </>
    ),
    name: "Jenny M",
    title: "Business Development Manager",
    image: img3,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Hear from our satisfied clients about their experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-xl transition-shadow h-full"
            >
              <div className="w-16 h-16 overflow-hidden rounded-full border-2 border-gray-300 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-800 font-medium text-base leading-relaxed flex-1">
                {testimonial.text}
              </p>
              <div className="mt-auto pt-4">
                <p className="text-gray-900 font-semibold text-lg">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}