import React from "react";
import img1 from "../../../assets/user3.jpeg";
import img2 from "../../../assets/user4.jpeg";
import img3 from "../../../assets/user5.jpeg";

const testimonials = [
  {
    text: "SalesDriver introduced us to technologies we could only dream of, saving us both time and money. When it comes to automation and AI they know what they’re doing.",
    name: "Carmen H",
    title: "Chief Operating Officer",
    image: img1,
  },
  {
    text: "So refreshing to work with a team that really, truly, understands the problems agencies face and has the solutions to overcome them.",
    name: "David D",
    title: "Senior Project Manager",
    image: img2,
  },
  {
    text: "They are SalesDriver....They Drive Sales. Thank you SalesDriver team it is nice to have a calendar full of real appointments.",
    name: "Jenny M",
    title: "Business Development Manager",
    image: img3,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-12 sm:px-10 px-5 bg-white">
      <div className="max-w-5xl lg:max-w-6xl mx-auto text-left">
        <h2 className="text-2xl lg:text-[45px] font-bold text-gray-900 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-3 mt-8 lg:mt-14">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 flex flex-col justify-between h-full"
            >
              <p className="text-gray-700 font-medium">
                " {testimonial.text} "
              </p>
              <div className="flex items-center mt-4 lg:mt-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="text-gray-600 font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
