import img from "../../../assets/img5.jpg";

export default function SalesInsightsSection() {
  return (
    <footer className="relative w-full bg-gray-100 text-gray-900 py-16 px-8 overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={img}
          alt="Background"
          className="opacity-40 w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold">Let’s Talk Sales</h2>
            <h3 className="text-xl font-semibold mt-2">
              Get a plan that’s built for you.
            </h3>
          </div>

          <div className="w-full md:w-1/2">
            <p className="text-gray-700 mb-6">
              More leads, better conversions, or an efficient unified sales
              system—we can help.
            </p>
            <div className="flex flex-col sm:flex-row text-sm sm:text-base gap-4">
              <button className="bg-yellowclr hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                BOOK A CALL
              </button>
              <button className="border border-gray-800 text-gray-800 font-medium px-6 py-3 rounded-lg transition">
                BROWSE SERVICES
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold">
              Get Sales Insights
              <br />
              Straight To Your Inbox
            </h2>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex border border-gray-400 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Type your email here"
                className="w-full px-4 py-3 outline-none bg-white text-gray-900 placeholder-gray-500"
              />
              <button className="bg-yellowclr hover:bg-yellow-600 text-white px-6 py-3 font-semibold transition">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
