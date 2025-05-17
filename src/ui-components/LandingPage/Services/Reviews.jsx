import React from "react";
import img1 from "../../../assets/users/1.webp";
import img3 from "../../../assets/users/2.webp";
import img2 from "../../../assets/users/3.webp";
// import img1 from "../../../assets/user3.jpeg";
// import img2 from "../../../assets/user4.jpeg";
// import img3 from "../../../assets/user5.jpeg";
import HeadImg from "../../../assets/Rectangle12.png";

const testimonials = [
  {
    text: `"SalesDriver introduced us to technologies we could only dream of, saving us both time and money. When it comes to automation and AI they know what they’re doing."`,
    name: "Carmen H",
    title: "Chief Operating Officer",
    image: img1,
  },
  {
    text: `"So refreshing to work with a team that really, truly understands the problems agencies face and has the solutions to overcome them."`,
    name: "David D",
    title: "Senior Project Manager",
    image: img2,
  },
  {
    text: `"They are SalesDriver....They Drive Sales. Thank you SalesDriver team, it is nice to have a calendar full of real appointments."`,
    name: "Jenny M",
    title: "Business Development Manager",
    image: img3,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full relative py-16 px-6">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={HeadImg}
          alt="Header Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white opacity-45"></div>
      </div>
      <div className="relative z-10">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#005895]">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="h-full flex flex-col justify-between p-6 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
              >
                <p className="text-gray-800 font-medium text-left text-[15px] leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center mt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border border-gray-300 mr-4"
                  />
                  <div className="text-left">
                    <p className="text-gray-900 font-semibold text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm font-bold">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
