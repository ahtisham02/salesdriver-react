import img from "../../../assets/bgimg.webp";
import img1 from "../../../assets/grow.jpg";

export default function SalesInsightsSection() {
  return (
    <footer className="w-full text-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="relative bg-cover bg-center lg:grid lg:grid-cols-2 py-10 bg-[#ebf5ff]">
          <div className="relative z-10 lg:block hidden">
            <div
              className="w-full h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
          </div>

          <div className="relative z-10 flex flex-col text-black justify-center lg:px-16 px-8 text-center">
            <h2 className="md:text-4xl text-3xl font-bold">
              Let’s Grow Your Sales
            </h2>
            <p className="md:text-lg mt-4">
              A tailored sales strategy to drive results and achieve your
              business goals.
            </p>
            <div className="mt-8">
              <button className="bg-blueclr text-white px-8 py-3 rounded-lg font-semibold text-lg">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>

        <div
          className="py-20 my-10 rounded-[50px] md:mx-10 mx-5 relative bg-cover bg-center"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <div className="absolute inset-0 rounded-[50px] bg-gray-600 opacity-30"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-semibold text-white">
              Get Sales Insights Delivered to Your Inbox
            </h3>
            <p className="text-lg mt-4 text-gray-200">
              Subscribe now for exclusive sales tips and strategies.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="flex mx-2 flex-wrap sm:flex-nowrap w-full max-w-md border border-gray-300 rounded-lg overflow-hidden shadow-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-[12px] bg-white text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 w-full sm:w-auto"
                />
                <button className="bg-[#69b2fc] text-white sm:px-8 py-2.5 font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
