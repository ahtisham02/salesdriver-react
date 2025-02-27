import React from "react";

export default function Form() {
  return (
    <div className="bg-gray-200 p-6 mt-6 mb-12 lg:mb-16 rounded-md max-w-[1150px] mx-5 sm:mx-10 lg:mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1">
              EMAIL
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border-none bg-gray-300 rounded-md text-gray-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1">
              FIRST NAME
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border-none bg-gray-300 rounded-md text-gray-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1">
              LAST NAME
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 border-none bg-gray-300 rounded-md text-gray-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1">
              PHONE
            </label>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 border-none bg-gray-300 rounded-md text-gray-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1">
              WEBSITE
            </label>
            <input
              type="text"
              placeholder="Website"
              className="w-full p-3 border-none bg-gray-300 rounded-md text-gray-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1">
              ORGANIZATION
            </label>
            <input
              type="text"
              placeholder="Organization"
              className="w-full p-3 border-none bg-gray-300 rounded-md text-gray-700 focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1">
              SERVICES INTERESTED IN
            </label>
            <input
              type="text"
              placeholder="Select all that apply"
              className="w-full p-3 border-none bg-gray-300 rounded-md text-gray-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1">
              SOLUTIONS INTERESTED IN
            </label>
            <input
              type="text"
              placeholder="Select all that apply"
              className="w-full p-3 border-none bg-gray-300 rounded-md text-gray-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1">
              MESSAGE
            </label>
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-3 border-none bg-gray-300 rounded-md text-gray-700 focus:outline-none"
            />
          </div>

          <div className="flex justify-end">
            <button className="bg-yellowclr text-white font-semibold py-3 px-8 rounded-md">
              M BUTTON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
