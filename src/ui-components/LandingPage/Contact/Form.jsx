import React from "react";

export default function Form() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 px-6">
      <div className="bg-white p-10 rounded-2xl border border-gray-200 max-w-[1150px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blueclr text-center mb-8">
          Let’s Build Something Amazing
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Reach out to us, and we’ll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="w-full p-4 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-blueclr focus:border-transparent transition-all"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-4 text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-blueclr peer-focus:text-sm"
              >
                EMAIL
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="firstName"
                placeholder=" "
                className="w-full p-4 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-blueclr focus:border-transparent transition-all"
              />
              <label
                htmlFor="firstName"
                className="absolute left-4 top-4 text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-blueclr peer-focus:text-sm"
              >
                FIRST NAME
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="lastName"
                placeholder=" "
                className="w-full p-4 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-blueclr focus:border-transparent transition-all"
              />
              <label
                htmlFor="lastName"
                className="absolute left-4 top-4 text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-blueclr peer-focus:text-sm"
              >
                LAST NAME
              </label>
            </div>

            <div className="relative">
              <input
                type="tel"
                id="phone"
                placeholder=" "
                className="w-full p-4 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-blueclr focus:border-transparent transition-all"
              />
              <label
                htmlFor="phone"
                className="absolute left-4 top-4 text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-blueclr peer-focus:text-sm"
              >
                PHONE
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="website"
                placeholder=" "
                className="w-full p-4 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-blueclr focus:border-transparent transition-all"
              />
              <label
                htmlFor="website"
                className="absolute left-4 top-4 text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-blueclr peer-focus:text-sm"
              >
                WEBSITE
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="organization"
                placeholder=" "
                className="w-full p-4 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-blueclr focus:border-transparent transition-all"
              />
              <label
                htmlFor="organization"
                className="absolute left-4 top-4 text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-blueclr peer-focus:text-sm"
              >
                ORGANIZATION
              </label>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="services"
                placeholder=" "
                className="w-full p-4 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-blueclr focus:border-transparent transition-all"
              />
              <label
                htmlFor="services"
                className="absolute left-4 top-4 text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-blueclr peer-focus:text-sm"
              >
                SERVICES INTERESTED IN
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="solutions"
                placeholder=" "
                className="w-full p-4 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-blueclr focus:border-transparent transition-all"
              />
              <label
                htmlFor="solutions"
                className="absolute left-4 top-4 text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-blueclr peer-focus:text-sm"
              >
                SOLUTIONS INTERESTED IN
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                placeholder=" "
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-blueclr focus:border-transparent transition-all"
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-4 text-gray-500 bg-white px-1 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-blueclr peer-focus:text-sm"
              >
                MESSAGE
              </label>
            </div>

            <div className="flex justify-end">
              <button className="bg-yellowclr text-white font-semibold py-3 px-10 rounded-lg">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
