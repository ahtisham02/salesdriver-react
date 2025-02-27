import img from "../../../assets/h1.jpg";

export default function SalesInsightsSection() {
  return (
    <div className="relative w-full bg-white py-16 px-8 overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={img}
          alt="Background"
          className="opacity-50 w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl font-bold text-gray-900">
              Let’s Talk Sales
            </h2>
            <h3 className="text-xl font-bold text-gray-900 mt-2">
              Get a plan that’s built for you.
            </h3>
          </div>

          <div className="w-full md:w-1/2 text-left">
            <p className="text-gray-700 mb-6">
              More leads, better conversions, or an efficient unified sales
              system, we can help.
            </p>
            <div className="flex flex-col sm:flex-row text-[14px] sm:text-base gap-4">
              <button className="bg-yellowclr text-white px-6 py-3 rounded-lg">
                BOOK A CALL
              </button>
              <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded-lg">
                BROWSE SERVICES
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-16">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl font-bold text-gray-900">
              Get Sales Insights
              <br />
              Straight To Your Inbox
            </h2>
          </div>

          <div className="w-full md:w-1/2 text-right">
            <div className="flex border border-gray-400 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Type your email here"
                className="w-full px-4 py-3 outline-none"
              />
              <button className="bg-yellowclr text-white px-3 sm:px-6 py-3">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
